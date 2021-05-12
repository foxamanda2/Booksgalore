import React from 'react'
import './custom.scss'
import { AddBooks } from './pages/AddBooks'
import { Route, Switch } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { BookInfo } from './pages/BookInfo'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/books">
        <AddBooks />
      </Route>
      <Route exact path="/bookInfo">
        <BookInfo />
      </Route>
      <Route path="*">This food page was not found</Route>
    </Switch>
  )
}
