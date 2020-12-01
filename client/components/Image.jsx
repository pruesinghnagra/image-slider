import React from 'react'

const Image = ({ url }) => {
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
