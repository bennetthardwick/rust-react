const React = require('react');

window.react_create_element = React.createElement;

import("../pkg/index.js")
  .then(x => {
    x.main_js();
  })
  .catch(console.error)
