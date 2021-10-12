import { showMessage } from 'react-native-flash-message';
import { NOTIFICATION_TYPE } from './constants';
export function showMessageToUser({ title, message, notificationType }) {
  let messageType;
  switch (notificationType) {
    case NOTIFICATION_TYPE.DEFAULT:
      messageType = 'default';
      break;
    case NOTIFICATION_TYPE.INFO:
      messageType = 'info';
      break;
    case NOTIFICATION_TYPE.SUCCESS:
      messageType = 'success';
      break;
    case NOTIFICATION_TYPE.ERROR:
      messageType = 'danger';
      break;
    case NOTIFICATION_TYPE.WARNING:
      messageType = 'warning';
      break;
    default:
      messageType = 'none';
  }
  setTimeout(() => {
    showMessage({
      message: title,
      description: message,
      type: messageType
    });
  }, 100);
}
