module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
          },
          region: env("AWS_REGION", "ap-south-1"),
        },
        bucket: env("AWS_S3_BUCKET","strapi-dev-uploads-feecd53b"),
        basePath: "",
      },
    },
  },

  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET") || env("APP_KEYS"),
    },
  },
});
