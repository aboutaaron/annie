var App = App || {};

App = {
  config: {
    url: 'https://docs.google.com/spreadsheet/pub?key=0AoFyAyn0Wp26dG1nWDlxY3Q5a0U1aGJvdm1YQUNMZ2c&output=html'
  },
  run: function () {
    jQuery(document).ready(function($) {
      App.init();
    });
  },
  init: function () {
    Tabletop.init( {
      key: App.config.url,
      callback: App.build,
      simpleSheet: true
    });
  },
  build: function (data, tabletop) {
    console.log(data);
  }
}

// Run
App.run();