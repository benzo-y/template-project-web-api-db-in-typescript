/* eslint @typescript-eslint/camelcase: 0 */
import schema from '../schema';

declare interface MyAppDB {
  users: typeof schema.users.Users;
}
