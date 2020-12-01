import React from 'react'
import { connect } from 'react-redux'
// import { addSlideIndex } from '../actions'

// const Dots = ({ active, clickFunction }) => (
//   <li
//     className={`carousel--dot ${active}`}
//     onClick={ clickFunction }>
//   </li>
// )

const Dots = (props) => {
  let { currentImageIndex } = props

  return (
    <div>
      {currentImageIndex.map(word =>
        <li key={currentImageIndex.id}></li>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentImageIndex: state.currentImageIndex
  }
}

export default connect(mapStateToProps)(Dots)
