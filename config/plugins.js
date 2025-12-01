module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("S3_KEY"),
            secretAccessKey: env("S3_SECRET"),
          },
          region: env("AWS_REGION"),
        },
        bucket: env("S3_BUCKET","strapi-dev-uploads-feecd53b"),
        baseUrl: env("S3_BASE_URL", null),   // optional
      },
    },
  },

  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET") || env("APP_KEYS"),
    },
  },
});
