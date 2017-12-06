import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { App } from './containers/App/App'
import reducer from './reducer'
import thunk from 'redux-thunk';


const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);