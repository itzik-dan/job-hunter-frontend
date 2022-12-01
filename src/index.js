import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import App from "./App";
import reducers from './reducers'
//development only, axios helper
import axios from 'axios'
window.axios = axios

// Setting up redux store
const middleware = [reduxThunk];

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
