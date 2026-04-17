import { ConversationControlFinalPage } from '../components/control/ConversationControlFinalPage';
import { conversationControlViewMock } from '../data/conversationControlViewMock';

export function ConversationControlFinalizer() {
  return <ConversationControlFinalPage {...conversationControlViewMock} />;
}
