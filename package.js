Package.describe({
  name: 'ijsnow:enum-object',
  version: '0.0.3',
  summary: 'A simple enum object.',
  git: 'https://github.com/ijsnow/enum-object',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.use('underscore');
  api.addFiles('enum-object.js');

  api.export('EnumObject');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('underscore');
  api.use('tinytest');
  api.use('ijsnow:enum-object');

  api.addFiles('enum-object-tests.js');
});
