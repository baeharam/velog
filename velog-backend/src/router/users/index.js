// @flow
import Router from 'koa-router';
import * as usersCtrl from './users.ctrl';

const users = new Router();
const user = new Router();

user.get('/tags', usersCtrl.getTags);

users.use('/@:username', usersCtrl.getUser, user.routes());
export default users;