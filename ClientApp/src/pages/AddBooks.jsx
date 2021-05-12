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
            <div className="overflow-auto">
              <h2>All Books</h2>
              <a>There and back again</a>
              <p>Stuff here about the book</p>

              <a>Lord of the rings</a>
              <p>Stuff here about the book</p>

              <a>Harry Potter</a>
              <p>Stuff here about the book</p>

              <a>The Alchamist</a>
              <p>Stuff here about the book</p>

              <a>Dune</a>
              <p>Stuff here about the book</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
