import React from 'react'
import './custom.scss'
import { AddBooks } from './pages/AddBooks'
import { Route, Switch } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/addBooks">
        <AddBooks />
      </Route>
      <Route path="*">This food page was not found</Route>
    </Switch>
  )
}
