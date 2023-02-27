export default {
  host: process.env.MYSQL_SERVER || '127.0.0.1',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || '',
};
