module.exports = {
  async beforeCreate(event) {
    // Auto-publish blogs created by authenticated users
    if (event.params.data.createdBy) {
      event.params.data.publishedAt = new Date();
    }
  },
};