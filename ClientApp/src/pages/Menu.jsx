import React from 'react'

export function Menu() {
  return (
    <>
      <div id="circularMenu" className="circular-menu">
        <a
          className="floating-btn"
          onclick="document.getElementById('circularMenu').classList.toggle('active');"
        >
          <i className="fa fa-plus"></i>
        </a>

        <menu className="items-wrapper">
          <a href="#" className="menu-item fa fa-facebook"></a>
          <a href="#" className="menu-item fa fa-twitter"></a>
          <a href="#" className="menu-item fa fa-google-plus"></a>
          <a href="#" className="menu-item fa fa-linkedin"></a>
        </menu>
      </div>

      <div
        id="circularMenu1"
        className="circular-menu circular-menu-left active"
      >
        <a
          className="floating-btn"
          onclick="document.getElementById('circularMenu1').classList.toggle('active');"
        >
          <i className="fa fa-bars"></i>
        </a>

        <menu className="items-wrapper">
          <a href="#" className="menu-item fa fa-home"></a>
          <a href="#" className="menu-item fa fa-user"></a>
          <a href="#" className="menu-item fa fa-pie-chart"></a>
          <a href="#" className="menu-item fa fa-cog"></a>
        </menu>
      </div>
    </>
  )
}
