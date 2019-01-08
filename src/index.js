import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers'

import App from './components/App/App.js'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools)

render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
)

ReactDOM.render(<App />, document.getElementById('root'));
