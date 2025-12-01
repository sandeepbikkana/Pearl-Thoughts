module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",

  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        env("PUBLIC_URL", `http://${env("EC2_PUBLIC_IP")}`),
        env("FRONTEND_URL", "*"),
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["*"],
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
