import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../utils/ref';

const eventBase: SchemaObject = {
  type: 'object',
  properties: {
    id: {
      title: 'Event Id',
      type: 'string',
    },
    timestamp: {
      title: 'Event Timestamp',
      type: 'string',
      format: 'date-time',
    },
    type: {
      title: 'Event type',
      type: 'string',
      enum: [
        'MESSAGE',
        'MESSAGE_STATUS',
      ],
    },
    subscriptionId: {
    channel: {
      title: 'Message Channel',
      type: 'string',
    },
  },
};

export const ref = createComponentRef(__filename);
export default eventBase;
