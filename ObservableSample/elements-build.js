const concat = require('concat');

(async function build() {
  const files = [
    './dist/ObservableSample/runtime.js',
    './dist/ObservableSample/polyfills.js',
    './dist/ObservableSample/scripts.js',
    './dist/ObservableSample/main.js'
  ];
  await concat(files, './dist/ObservableSample/bundle.js');
})();
