var getHTML = require('../http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
  };


function printLowerCase (html) {
  
    var newList = html.toLowerCase()
    console.log(newList);
  
}

  getHTML(requestOptions, printLowerCase)