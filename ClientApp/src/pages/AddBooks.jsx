import React from 'react'

export function AddBooks() {
  return (
    <>
      <h1>Welcome!</h1>
      <section>
        <h2>Add Favorite Book</h2>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Description</label>
          <textarea type="text" />
        </div>
      </section>
    </>
  )
}
