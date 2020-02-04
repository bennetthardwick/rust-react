const React = require('react');

(window as any).react_create_element = React.createElement;

import("../pkg/index.js")
  .then(x => {
    x.main_js();
  })
  .catch(console.error)
