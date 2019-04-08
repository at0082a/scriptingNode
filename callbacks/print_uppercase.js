var getHTML = require('../http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };
  
  function printUpperCase (html) {
  
    var newList = html.toUpperCase()
    console.log(newList);
  
  }

  getHTML(requestOptions, printUpperCase)