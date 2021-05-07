import React from 'react'

function Image ({ url }) {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className="carousel--slide"
      style={styles}>
    </div>
  )
}

export default Image
