// tslint:disable:max-line-length
import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';
import { ref as errorsRef } from './errors';

const base: SchemaObject = {
  title: 'Error Object',
  description: 'This is a Error object model.',
  type: 'object',
  properties: {
    code: {
      title: 'Code',
      description: 'Error code.',
      type: 'string',
      readOnly: true,
    },
    message: {
      title: 'Message',
      description: 'Error message.',
      type: 'string',
      readOnly: true,
    },
    details: {
      title: 'Details',
      description: 'Error details.',
      type: 'array',
      readOnly: true,
      items: {
        $ref: errorsRef,
      },
    },
  },
  required: [
    'code',
    'message',
  ],
};

export const ref = createComponentRef(__filename);
export default base;
