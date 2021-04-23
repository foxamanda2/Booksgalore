import React from 'react'

export function BookInfo() {
  return (
    <>
      <h2>There and back again</h2>
      <p>Added by: </p>
      <p>Added: DateTime</p>
      <p>Last Updated:</p>
      <div>
        <label>Description</label>
        <textarea></textarea>
      </div>
      <div>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </>
  )
}
