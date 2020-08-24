/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2020-08-24 16:44:41
# FilePath: /deno-test/src/main.js
# Description: 
#
============================================================================= */

import React from '../static/lib/react.js';
// const React = React1;
import ReactDOM from '../static/lib/reactDom.js';

import Index from './pages/Index';


ReactDOM.render(
  <React.Fragment>
    <Index />
  </React.Fragment>,
  document.getElementById('root')
);

