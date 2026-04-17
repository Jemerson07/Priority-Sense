import type { ConversationControlItem, ConversationControlSummary } from '../types/conversationControl';

export const conversationControlSummaryMock: ConversationControlSummary = {
  inbound: 24,
  replied: 11,
  pending: 9,
  awaitingCustomer: 4,
};

export const conversationControlItemsMock: ConversationControlItem[] = [
  {
    id: 'CTRL-201',
    customer: 'LM Mobilidade',
    channel: 'whatsapp',
    subject: 'Vehicle blocked before departure',
    lastMessage: 'The vehicle is still blocked and cannot leave for the route.',
    status: 'Suggested reply',
    suggestedReply: 'We identified the blocker and are escalating the request to the operations squad now.',
    owner: 'Operations Squad',
    nextAction: 'Approve and send suggested reply',
    pendingSince: '2026-04-14T10:30:00-03:00',
  },
  {
    id: 'CTRL-202',
    customer: 'Porto Service Hub',
    channel: 'email',
    subject: 'Driver app access issue',
    lastMessage: 'The driver still cannot access the system after reset.',
    status: 'Awaiting approval',
    suggestedReply: 'We are validating the login issue and will provide an update shortly.',
    owner: 'Support Team',
    nextAction: 'Approve response or edit manually',
    pendingSince: '2026-04-14T10:12:00-03:00',
  },
  {
    id: 'CTRL-203',
    customer: 'Atlantic Repairs',
    channel: 'whatsapp',
    subject: 'Maintenance schedule clarification',
    lastMessage: 'Can you confirm if the maintenance window is still active for tomorrow?',
    status: 'Awaiting customer',
    lastReply: 'We sent the maintenance window confirmation and are waiting for customer acknowledgment.',
    owner: 'Maintenance Desk',
    nextAction: 'Monitor customer reply',
    pendingSince: '2026-04-14T09:55:00-03:00',
  },
  {
    id: 'CTRL-204',
    customer: 'Lisboa Cargo',
    channel: 'email',
    subject: 'Need invoice resend',
    lastMessage: 'Please resend the maintenance invoice to finance.',
    status: 'Internal pending',
    owner: 'Backoffice',
    nextAction: 'Fetch invoice and send email reply',
    pendingSince: '2026-04-14T09:10:00-03:00',
  },
];
