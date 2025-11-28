'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// path: src/api/blog/controllers/blog.js

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user; // Logged-in user

    if (!user) {
      return ctx.unauthorized('You must be logged in to post a blog');
    }

    // data from request
    const { data } = ctx.request.body;

    // author and publish automatically
    const blogData = {
      ...data,
      author: user.id, // assuming relation is set
      publishedAt: new Date(), // auto-publish
    };

    const response = await strapi.entityService.create('api::blog.blog', {
      data: blogData,
    });

    return response;
  },
}));


module.exports = createCoreController('api::blog.blog');
