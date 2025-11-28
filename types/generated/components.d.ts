import type { Schema, Struct } from '@strapi/strapi';

export interface EmployeeSocialHandle extends Struct.ComponentSchema {
  collectionName: 'components_employee_social_handles';
  info: {
    displayName: 'SocialHandle';
  };
  attributes: {
    handle: Schema.Attribute.String;
    platform: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'employee.social-handle': EmployeeSocialHandle;
    }
  }
}
