import { ENV } from 'common/enums/enums';

import { CommentApi } from './comment-api/comment-api.service';
import { Http } from './http/http.service';
import { Navigation } from './navigation/navigation.service';
import { Notification } from './notification/notification.service';
import { PostApi } from './post-api/post-api.service';

const http = new Http();

const notification = new Notification();

const navigation = new Navigation();

const postApi = new PostApi({
  http,
  apiPrefix: ENV.API.PREFIX,
});

const commentApi = new CommentApi({
  http,
  apiPrefix: ENV.API.PREFIX,
});

export { commentApi, http, navigation, notification, postApi };
