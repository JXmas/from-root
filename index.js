var findRoot = require('find-root');
var path = require('path');

function fromRoot(...folders){
    return path.join.apply({}, [findRoot(module.parent.filename)].concat(folders));
}

module.exports = fromRoot;
