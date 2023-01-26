// This is the application's config

export default {
    port: 7777,
    host: "localhost",
    dbUri: "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2/backendChallenge",
    saltRounds: 10,
    accessTokenLifetime: "1m",
    publicKey:`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxhUTv7H1YetEIUhWl/R/
DuFH6xYYOXA6JEc5uHtswfi77BUhwXcTAU6pxQmGb9fOUykil5uhDhBJVOOrM/NK
7eP8m/ewd5YYBgyoyPUXzuXO/6SZhXn5Vwsb+m4QJjqrH8ai1GFQtPUdm/lGxcix
0vLuO4cvxbXUb61ruvdfVxfNMbzJMriBxbbze2dfYNIo8hkis1hJqfJUf6yx03TW
Bb7b3w3hFSUBE6kzMI38ehk9TXVzp62Er6Fw5xnbpUF+F0BT3fwieohDwOYbthMp
JROEOY5StZjwzGwfHkaj0PpQm0xhZpOsL2pxwT9oFS2q+wSYOe7kqVHzbfX/Cj49
uwIDAQAB
-----END PUBLIC KEY-----`,
    privateKey:``,
};