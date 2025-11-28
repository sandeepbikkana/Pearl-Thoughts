
module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://strapi.gtmlabs.xyz",
        "http://localhost:3000"
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
