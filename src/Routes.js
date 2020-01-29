import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './views/Home';
import MovieDetail from './views/MovieDetail';
import Error from './views/Error';

const Routes = routeProps => (
  <App location={routeProps.location}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/error" component={Error} />
      <Route exact path="/:imdbId" component={MovieDetail} />
      <Route path="*" component={Error} />
    </Switch>
  </App>
)

export default withRouter(Routes)
