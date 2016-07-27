#!/usr/bin/env node
require('../server.babel'); // babel registration (runtime transpilation for node)
/**
 * Define isomorphic constants.
 */
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

if (__DEVELOPMENT__) {
  if (!require('piping')({
      hook: true,
      ignore: /(\/\.|~$|\.json|\.scss$)/i
    })) {
    return;
  }
}

require('../src/server');
