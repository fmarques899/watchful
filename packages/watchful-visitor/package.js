/* Information about this package */
Package.describe({
  // Short two-sentence summary.
  summary: "This package manages the visitors.",
  // Version number.
  version: "0.0.1",
  // Optional.  Default is package directory name.
  name: "watchful:visitor"
});
/* This defines your actual package */
Package.onUse(function (api) {

  api.use('templating');
  // Templates
  api.addFiles('lib/client/templates/visitors.html', ['client']);

  // Client Javascript
  api.addFiles('lib/client/js/visitors.js', ['client']);
});
/* This defines the tests for the package */
Package.onTest(function (api) {

});
