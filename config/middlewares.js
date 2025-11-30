module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",

  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        env("CORS_ORIGIN", "http://localhost:3000"),
        env("PUBLIC_URL", "http://3.110.54.166"),
        env("FRONTEND_URL"),
        "*" // dev only
      ],
    },
  },

  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
