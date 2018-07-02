import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Menu from './Menu';

//Pages
import TanteremPage from '../pages/TanteremPage';
import DashboardPage from '../pages/DashboardPage';
import MunkarendPage from '../pages/MunkarendPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Menu">
          <Menu />
        </div>
        <div className="Content">
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/tanterem" component={TanteremPage} />
            <Route exact path="/munkarend" component={MunkarendPage} />
          </Switch>
        </div>
      </div>
    );
  }
  }

export default App;
