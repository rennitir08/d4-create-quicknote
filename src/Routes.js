// Load React
import React from 'react'
// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
// Import your components here...
import Welcome from './Welcome';
import Search from './Search';
import Newnote from './Newnote';
// import Completed from './components/Completed';

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                 <Route path="/" component={Welcome} />
                 <Route path="/Search" component={Search} />
                  <Route path="/Newnote" component={Newnote} />
            </Router>
        </Provider>
    }
}

export default Routes
