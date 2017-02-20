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
Package.onUse(function(api) {

    api.use('templating');
    api.use('mongo', ['client', 'server']);
    api.use('watchful:core')
    api.use('watchful:room')


    // Templates
    api.addFiles('lib/client/templates/visitors.html', ['client']);

    // Stylesheets
    api.addFiles('lib/client/stylesheets/visitors.css', ['client']);
    // Client Javascript
    api.addFiles('lib/client/js/visitors.js', ['client']);

    // Server Javascript
    api.addFiles('lib/server/visitors.js', ['server']);
});
/* This defines the tests for the package */
Package.onTest(function(api) {

});
