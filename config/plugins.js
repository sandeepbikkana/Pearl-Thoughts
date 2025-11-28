
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_S3_BUCKET'),
        },
      },
    },
  },

  // Keep this as-is
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || env('APP_KEYS'),
    },
  },
});
