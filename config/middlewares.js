module.exports = [
  "strapi::logger",
  "strapi::errors",

  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        env("CORS_ORIGIN", "http://localhost:3000"),
        env("PUBLIC_URL"),         // allow Strapi admin domain
        env("FRONTEND_URL"),       // allow frontend domain
        "*",                       // DEV ONLY — remove in prod
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
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
