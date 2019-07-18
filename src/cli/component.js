const minimist = require('minimist');
const path = require('path');


const args = minimist(process.argv.slice(2), {
  alias: {
    name: 'n',
  },
});

console.log(args);


