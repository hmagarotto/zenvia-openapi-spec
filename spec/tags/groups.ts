import { TagGroupObject } from 'openapi3-ts';

const groups: TagGroupObject[] = [{
  name: 'Messaging',
  tags: [
    'Content types',
    'SMS',
    'WhatsApp',
    'Facebook',
    'RCS',
    'Telegram',
    'Voice',
    'Batches',
  ],
}, {
  name: 'Webhooks',
  tags: [
    'Webhooks',
  ],
}, {
  name: 'Templates',
  tags: [
    'Templates',
  ],
}, {
  name: 'Reports',
  tags: [
    'Message Report',
    'Flow Report',
  ],
}];

export default groups;
