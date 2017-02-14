/* Information about this package */
Package.describe({
  // Short two-sentence summary.
  summary: "This is the main package of Watchful App",
  // Version number.
  version: "0.0.1",
  // Optional.  Default is package directory name.
  name: "watchful:core"
});
/* This defines your actual package */
Package.onUse(function (api) {

  api.use('templating');
  // Templates
  api.addFiles('lib/client/templates/index.html', ['client']);
  api.addFiles('lib/client/templates/navbar.html', ['client']);

  // Stylesheets
  api.addFiles('lib/client/stylesheets/style.css', ['client']);
});
/* This defines the tests for the package */
Package.onTest(function (api) {

});
