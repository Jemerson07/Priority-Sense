import {
  conversationControlItemsMock,
  conversationControlSummaryMock,
} from './conversationControlMock';

export const conversationControlViewMock = {
  summary: conversationControlSummaryMock,
  items: conversationControlItemsMock,
  suggestedReplyItem: conversationControlItemsMock[0],
  pendingItem: conversationControlItemsMock[3],
  awaitingCustomerItem: conversationControlItemsMock[2],
};
