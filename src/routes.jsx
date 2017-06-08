import React from 'react';
import { Route, IndexRoute } from 'history';
import App from './components/App';
import HomePage from './components/Home';
import CatsPage from './components/Cats';

const nav = (<Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/cats" component={CatsPage} />
</Route>);

export default nav;