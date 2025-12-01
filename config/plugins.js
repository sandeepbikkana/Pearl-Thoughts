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
          region: env("AWS_REGION", "ap-south-1"),
        },
        bucket: env("AWS_S3_BUCKET"),
        basePath: "",
      },
    },
  },

  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
});
