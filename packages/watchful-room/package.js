/* Information about this package */
Package.describe({
  // Short two-sentence summary.
  summary: "This package manages the rooms data.",
  // Version number.
  version: "0.0.1",
  // Optional.  Default is package directory name.
  name: "watchful:room"
});
/* This defines your actual package */
Package.onUse(function (api) {

  api.use('templating');
  api.use('watchful:core');
  api.use('mongo', ['client', 'server']);
  // Templates
  api.addFiles('', ['client']);

  // Stylesheets
  api.addFiles('', ['client']);

  // Client Javascript
  api.addFiles('lib/client/js/rooms.js', ['client']);

  api.addFiles('lib/server/rooms.js', ['server']);
});
/* This defines the tests for the package */
Package.onTest(function (api) {

});
