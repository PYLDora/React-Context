import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './home';


class Router extends Component {

  render() {

    return (
      <HashRouter>

        <Route path='/' component={Home} />

      </HashRouter>
    )
  }
}

export default Router;