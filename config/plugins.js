module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('S3_KEY'),
            secretAccessKey: env('S3_SECRET'),
          },
          region: env('AWS_REGION', 'ap-south-1'),
          params: {
            Bucket: env('AWS_S3_BUCKET'),
          },
        },
        basePath: '',
        baseUrl: env('CLOUDFRONT_URL', null), // Optional CDN/CloudFront URL
      },
    },
  },

  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
});
