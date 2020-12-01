import React from 'react'

const Arrow = ({ direction, clickFunction, icon }) => (
  <div
    className={ `carousel--arrow carousel--arrow-${direction}` }
    onClick={ clickFunction }>
    { icon }
  </div>
)

export default Arrow
