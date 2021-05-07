import React from 'react'

function Dots ({ active, clickFunction }) {
  <li
    className={`carousel--dot ${active}`}
    onClick={ clickFunction }>
  </li>
}

export default Dots
