import {Task} from './task.js';
import {User} from './user.js';

let task = new Task('сообщение');
let user = new User(task);
user.do();