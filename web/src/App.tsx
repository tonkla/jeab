import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'

import store from './store'
import Home from './pages/Home'
import Login from './pages/Login'
import AuthorizedRoute from './components/AuthorizedRoute'

import 'antd/dist/antd.css'
import './styles/main.css'
import './App.css'

export default () => (
  <StoreProvider store={store}>
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <AuthorizedRoute path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </StoreProvider>
)
