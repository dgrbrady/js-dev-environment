// This file isn't transpiled, so must use CommonJS and ES6

// Register bable to transpile before our tests run.
require('babel-register')();

// Disable webpack feature that Mocha doesn't understnad.
require.extensions['.css'] = function() {};
