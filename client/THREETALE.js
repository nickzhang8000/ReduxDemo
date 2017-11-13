import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';

import Rate from './components/Rate';
import Comment from './components/Comment';
import Done from './components/Done';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';



const router = (
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}></Route>
        <Route path='/rating' component={Rate}></Route>
        <Route path='/comment' component={Comment}></Route>
        <Route path='/done' component={Done}></Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
