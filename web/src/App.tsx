import { StoreProvider } from 'easy-peasy'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import AuthorizedRoute from './modules/base/components/AuthorizedRoute'
import Home from './modules/base/pages/Home'
import Login from './modules/base/pages/Login'
import store from './store'
import './styles/global.css'

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
