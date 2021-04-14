import React from 'react'
import './custom.scss'

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
      {/* <aside class="row justify-content-md-center">
        <p class="col-sm-2">Here</p>
        <p class="col-md-auto">Hey there I am Ham</p>
        <p class="col-sm-2">Here</p>
        <div class="w-100"></div>
        <p class="col">Here</p>
        <p class="col-6">Here</p>
        <p class="col">Here</p>
      </aside>
      <aside class="row">
        <p class="col">Here</p>
        <p class="col">Here</p>
        <p class="col">Here</p>
        <p class="col">Here</p>
        <p class="col">Here</p>
        <p class="col">Here</p>
      </aside> */}
    </div>
  )
}
