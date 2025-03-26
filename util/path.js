const path = require('path');

console.log(path.dirname(require.main.filename));
console.log(require.main.filename);
module.exports = path.dirname(require.main.filename);