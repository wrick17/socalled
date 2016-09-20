var style = require("./app.less");

import React  from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import HomePage from './HomePage.jsx'
import AboutPage from './AboutPage.jsx'
import reducers from './reducers/reducers.jsx'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={HomePage} >
            <Route path="about" component={AboutPage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
