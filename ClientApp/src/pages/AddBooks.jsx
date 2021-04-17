import React from 'react'

export function AddBooks() {
  return (
    <>
      <h1>Welcome!</h1>
      <div className="container">
        <aside className="row">
          <div className="col">
            <h2>Add Favorite Book</h2>
            <div>
              <label>Title</label>
              <input type="text" />
            </div>
            <div>
              <label>Description</label>
              <textarea type="text" />
            </div>
            <button>Add</button>
          </div>
          <div className="col">
            <h2>All Books</h2>
            <p>
              <a href="">There and back again</a>
              Stuff here about the book
            </p>
            <p>
              <a href="">Lord of the rings</a>
              Stuff here about the book
            </p>
            <p>
              <a href="">Harry Potter</a>
              Stuff here about the book
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}
