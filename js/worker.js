module = {};
node = false;
var require = function(name) {return function() {}};
importScripts('../lib/regression.js', 'extension.js',  'spectralLines.js', 'methods.js', 'helio.js', 'templates.js', 'classes.js', '../lib/dsp.js', 'config.js', 'workerMethods.js');

/**
 * We need to add an event listener that listens for processing requests from the ProcessorService
 */
self.addEventListener('message', function(event) {
    var data = event.data;
    var result = handleEvent(data);
    self.postMessage(result);
});
