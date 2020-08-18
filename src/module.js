console.log('Module.js');

async function start(params) {
  return await Promise.resolve('async working');
}

start().then(console.log);
