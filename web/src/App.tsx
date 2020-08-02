import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'

import store from './store'
import Home from './pages/Home'
import Login from './pages/Login'
import AuthorizedRoute from './components/AuthorizedRoute'

import 'antd/dist/antd.css'
import './styles/main.css'
import './App.css'

const POS = lazy(() => import('./modules/pos/Main'))
const Inventory = lazy(() => import('./modules/inventory/Main'))

export default () => (
  <StoreProvider store={store}>
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <AuthorizedRoute path="/" exact component={Home} />
          <AuthorizedRoute path="/pos" exact component={POS} />
          <AuthorizedRoute path="/inventory" exact component={Inventory} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  </StoreProvider>
)
