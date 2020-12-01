import React from 'react'
import request from 'superagent'

import Image from './Image'
import Arrow from './Arrow'
// import Dots from './Dots'

import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

class Slider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentImageIndex: 0,
      photos: []
    }

    this.previousSlide = this.previousSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
  }

  componentDidMount () {
    this.fetchPhotos()
  }

  fetchPhotos () {
    const APILINK = 'https://api.unsplash.com/photos/random/?count=10&'
    const APICLIENT = 'client_id=TnyS4LWeYNLHw-Uebddv7oZwfZMUPcwsBplj2zZHYbc'
    request
      .get(APILINK + APICLIENT)
      .then((res) => {
        this.setState({
          photos: res.body
        })
      })
  }

  previousSlide () {
    const lastIndex = this.state.photos.length - 1
    const { currentImageIndex } = this.state
    const resetIndex = currentImageIndex === 0
    const index = resetIndex ? lastIndex : currentImageIndex - 1

    this.setState({
      currentImageIndex: index
    })
  }

  nextSlide () {
    const lastIndex = this.state.photos.length - 1
    const { currentImageIndex } = this.state
    const resetIndex = currentImageIndex === lastIndex
    const index = resetIndex ? 0 : currentImageIndex + 1

    this.setState({
      currentImageIndex: index
    })
  }

  render () {
    const { photos, currentImageIndex } = this.state
    return (
      <article className='carousel'>
        <Arrow
          direction='left'
          clickFunction={this.previousSlide}
          icon={<BiLeftArrow/>}
        />
        <Arrow
          direction='right'
          clickFunction={this.nextSlide}
          icon={<BiRightArrow/>}
        />
        {photos.map((photo) => {
          if (photos.indexOf(photo) === currentImageIndex) {
            return (
              <Image key={photo.id} url={photo.urls.regular} />
            )
          }
        })}
        <ul className='carousel--dots'>
          {/* <Dots /> */}
          {/* {photos.map((photo, i) => {
            return (
              <Dots active={currentImageIndex === i ? 'active' : ''} key={photo.id}
                clickFunction={}/>
            )
          })} */}
        </ul>
      </article>
    )
  }
}

export default Slider
