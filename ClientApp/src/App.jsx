import React from 'react'
import './custom.scss'
import { AddBooks } from './pages/AddBooks'
import { Route, Switch } from 'react-router-dom'

export function App() {
  return (
    <div className="container">
      <aside className="row">
        <h3 className="col">Registration</h3>
        <h3 class="col">Login</h3>

        <div className="w-100"></div>
        <div className="col">
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div className="col">
          <label>Email</label>
          <input type="text" />
        </div>

        <div className="w-100"></div>
        <div className="col">
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className="col">
          <label>Password</label>
          <input type="text" />
        </div>

        <div className="w-100"></div>
        <div className="col">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="col ">
          <button>Log In</button>
        </div>

        <div className="w-100"></div>
        <di className="col">
          <label>Password</label>
          <input type="text" />
        </di>

        <div className="w-100"></div>
        <di className="col">
          <label> Confirm Password</label>
          <input type="text" />
        </di>
      </aside>

      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/addBooks">
          <AddBooks />
        </Route>
        <Route path="*">This food page was not found</Route>
      </Switch>
    </div>
  )
}
