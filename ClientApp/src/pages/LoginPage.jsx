import React from 'react'

export function LoginPage() {
  return (
    <>
      <div className="container">
        <aside className="row">
          <div className="col">
            <h3>Registration</h3>
            <p>
              <label>First Name</label>
              <input type="text" />
            </p>
            <p>
              <label>Last Name</label>
              <input type="text" />
            </p>
            <p>
              <label>Email</label>
              <input type="text" />
            </p>
            <p>
              <label>Password</label>
              <input type="text" />
            </p>
            <p>
              <label> Confirm Password</label>
              <input type="text" />
            </p>
            <p>
              <button>Register</button>
            </p>
          </div>

          <div className="col">
            <h3>Login</h3>
            <p>
              <label>Email</label>
              <input type="text" />
            </p>
            <p>
              <label>Password</label>
              <input type="text" />
            </p>
            <p>
              <button>Log In</button>
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}
