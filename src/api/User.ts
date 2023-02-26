import { post } from '@/utils/request';

export default class User {
  static async login(username: string, password: string) {
    return post('/login', {
      username,
      password
    })
  }
}