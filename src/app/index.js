import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Route from './router.js'
import rootReducer from './redux/reducers/index'
import '../less/index.less'

let store = new createStore(rootReducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    )
  }
}

export default App