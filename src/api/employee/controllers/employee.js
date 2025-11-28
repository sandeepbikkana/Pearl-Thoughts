'use strict';

/**
 * employee controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::employee.employee', ({ strapi }) => ({
  async verify(ctx) {
    try {
      const payload = ctx.request?.body || {};
      const query = ctx.request?.query || {};

      const offerLetterSource = payload.offerLetterId ?? query.offerLetterId;
      const emailSource = payload.email ?? query.email;

      const offerLetterId =
        typeof offerLetterSource === 'string' ? offerLetterSource.trim() : '';
      const email =
        typeof emailSource === 'string' ? emailSource.trim().toLowerCase() : '';

      if (!offerLetterId && !email) {
        return ctx.badRequest('Provide an offerLetterId or email to verify employment.');
      }

      const filters = {};

      if (offerLetterId) {
        filters.offerLetterId = offerLetterId;
      }

      if (email) {
        filters.email = email;
      }

      const result = await strapi.entityService.findMany('api::employee.employee', {
        filters,
        limit: 1,
        fields: [
          'fullName',
          'position',
          'department',
          'employmentType',
          'joinedDate',
          'currentStatus',
          'offerLetterId',
        ],
      });

      const employee = Array.isArray(result) ? result[0] : result;

      if (!employee) {
        return ctx.notFound('No matching employee record found.');
      }

      if (employee.currentStatus && employee.currentStatus !== 'active') {
        return ctx.forbidden('Employee record is not active.');
      }

      const sanitizedEmployee =
        /** @type {Record<string, unknown>} */ (await this.sanitizeOutput(employee, ctx));

      const response = {
        message: 'Employment verified successfully.',
        employee: {
          fullName: sanitizedEmployee.fullName ?? null,
          position: sanitizedEmployee.position ?? null,
          department: sanitizedEmployee.department ?? null,
          employmentType: sanitizedEmployee.employmentType ?? null,
          joinedDate: sanitizedEmployee.joinedDate ?? null,
          currentStatus: sanitizedEmployee.currentStatus ?? null,
          offerLetterId: sanitizedEmployee.offerLetterId ?? null,
        },
      };

      return this.transformResponse(response);
    } catch (error) {
      strapi.log.error('Employment verification failed', error);
      return ctx.internalServerError('Unable to verify employment at this time.');
    }
  },
}));
