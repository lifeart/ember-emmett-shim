(function() {
  /* globals define, self */
  function vendorModule() {
    'use strict';

    return {
      'default': self['Emitter'] || Emitter,
      'Emitter': self['Emitter'] || Emitter,
      __esModule: true,
    };
  }
  // export an object with a default property that contains the 'hljs' global.
  define('emmett', [], vendorModule);
})();