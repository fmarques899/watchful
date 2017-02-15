/* Information about this package */
Package.describe({
  // Short two-sentence summary.
  summary: "This package manages the visitors.",
  // Version number.
  version: "0.0.1",
  // Optional.  Default is package directory name.
  name: "watchful:patrimony"
});
/* This defines your actual package */
Package.onUse(function (api) {

  api.use('templating');
  api.use('watchful:core')
  // Templates
  api.addFiles('lib/client/templates/patrimony.html', ['client']);

  // Client Javascript
});
/* This defines the tests for the package */
Package.onTest(function (api) {

});
