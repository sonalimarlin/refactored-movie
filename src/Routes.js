import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './views/Home';
import MovieDetail from './views/MovieDetail';

const Routes = routeProps => (
  <App location={routeProps.location}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:imdbId" component={MovieDetail} />
    </Switch>
  </App>
)

export default withRouter(Routes)
