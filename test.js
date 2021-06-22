import { sayHello } from './index.js';

const r = sayHello();

if (r !== 'hello') {
  console.error('test failed');
  process.exit(1);
}

console.info('test succeeded');