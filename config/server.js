// require("dotenv").config();

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),

  /**
   * PUBLIC_URL must be set when running behind EC2 or load balancer
   */
  url: env("PUBLIC_URL", "http://43.204.110.201"),  // IMPORTANT: null instead of localhost

  proxy: true, // required when behind reverse proxy or EC2 + ALB

  app: {
    keys: env.array("APP_KEYS"),
  },

  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
