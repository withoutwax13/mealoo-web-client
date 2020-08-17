import { hot } from "react-hot-loader/root";
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import Store from './utils/Store'

const render = (Component) =>
  ReactDOM.render(<Provider store={Store}><Component/></Provider>, document.getElementById("root"));

  render(hot(App))