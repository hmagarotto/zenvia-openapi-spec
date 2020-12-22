import { SchemaObject } from 'openapi3-ts';
import { ref as baseRef } from './base';
import { ref as quickReplyRef } from './nestable-contents/quick-reply-list';
import { ref as buttonsRef } from './nestable-contents/buttons-list';
import { createComponentRef } from '../../../../utils/ref';

const buttons: SchemaObject = {
  type: 'object',
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        example: 'card',
      },
      text: {
        type: 'string',
        description: 'Text to be sent',
        example: 'This is a text',
      },
      label: {
        type: 'string',
        description: 'Card title.',
        example: 'example',
      },
      buttons: {
        type: 'array',
        description: 'Array of buttons displayed inside the card. The same used on Button Menu and Quick Reply.',
        items: {
          $ref: buttonsRef,
        },
      },
      quickReplyButtons: {
        type: 'array',
        description: 'Array of buttons displayed as quick reply. The same used on Button Menu and Quick Reply.',
        items: {
          $ref: quickReplyRef,
        },
      },
    },
  },
  ],
};

export const ref = createComponentRef(__filename);
export default buttons;