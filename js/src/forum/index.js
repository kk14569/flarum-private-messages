import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import NotificationGrid from 'flarum/forum/components/NotificationGrid';
import Message from './models/Message';
import Conversation from './models/Conversation';
import ConversationUser from './models/ConversationUser';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import ConversationsPage from './components/ConversationsPage';
import ConversationViewPage from './components/ConversationViewPage';
import PrivateMessageReceivedNotification from './components/PrivateMessageReceivedNotification';
import Stream from 'flarum/common/utils/Stream';
import addConversationsDropdown from './addConversationsDropdown';

app.initializers.add('private-messages', function (app) {
  app.store.models.messages = Message;
  app.store.models.conversations = Conversation;
  app.store.models.conversation_users = ConversationUser;

  User.prototype.conversations = Model.hasMany('conversations');
  User.prototype.unreadMessages = Model.attribute('unreadMessages');

  app.notificationComponents.privateMessageReceived = PrivateMessageReceivedNotification;

  app.routes.conversations = { path: '/private-messages/conversations', component: ConversationsPage };
  app.routes.messages = { path: '/private-messages/messages/:id', component: ConversationViewPage };

  addConversationsDropdown();

  extend(IndexPage.prototype, 'oncreate', function () {
    if (app.pusher) {
      app.pusher.then((object) => {
        const channels = object.channels;
        if (channels.user) {
          channels.user.bind('newMessage', (data) => {
            app.session.user.unreadMessages = Stream(app.session.user.unreadMessages() + 1);
            m.redraw();
          });
        }
      });
    }
  });

  extend(IndexPage.prototype, 'onremove', function () {
    if (app.pusher) {
      app.pusher.then((object) => {
        const channels = object.channels;
        if (channels.user) {
          channels.user.unbind('newMessage');
        }
      });
    }
  });

  extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
    items.add('privateMessgeReceived', {
      name: 'privateMessgeReceived',
      icon: 'fas fa-comment-alt',
      label: app.translator.trans('private-messages.forum.notifications.notify_message_received'),
    });
  });
});
