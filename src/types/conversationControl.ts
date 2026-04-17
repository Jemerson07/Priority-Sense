export type ControlChannel = 'email' | 'whatsapp';

export type ControlStatus =
  | 'New inbound'
  | 'Under triage'
  | 'Suggested reply'
  | 'Awaiting approval'
  | 'Replied'
  | 'Awaiting customer'
  | 'Internal pending'
  | 'Escalated'
  | 'Resolved'
  | 'Automation failed';

export type ConversationControlItem = {
  id: string;
  customer: string;
  channel: ControlChannel;
  subject: string;
  lastMessage: string;
  status: ControlStatus;
  suggestedReply?: string;
  lastReply?: string;
  owner?: string;
  nextAction: string;
  pendingSince: string;
};

export type ConversationControlSummary = {
  inbound: number;
  replied: number;
  pending: number;
  awaitingCustomer: number;
};
