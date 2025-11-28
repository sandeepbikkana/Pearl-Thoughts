require("dotenv").config();

module.exports = ({ env }) => {
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    // url: env("PUBLIC_URL","https://strapi.gtmlabs.xyz"),
    url: env("PUBLIC_URL","http://localhost:1337"),
    proxy: true,

    app: {
      keys: [
        env("APP_KEY1"),
        env("APP_KEY2"),
        env("APP_KEY3"),
        env("APP_KEY4"),
      ],
    },

    webhooks: {
      populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    },
  };
};
