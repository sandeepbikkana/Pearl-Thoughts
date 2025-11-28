'use strict';

/**
 * employee router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::employee.employee', {
  config: {
    verify: {
      auth: false,
    },
  },
  routes: [
    {
      method: 'POST',
      path: '/employment/verify',
      handler: 'employee.verify',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
});
