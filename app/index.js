import React from 'react'
import { createStore } from 'redux'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import knightsTaleApp from './reducers/index'
import App from './components/App'

let store = createStore(knightsTaleApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
