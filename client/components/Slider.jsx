import React, {useState, useEffect} from 'react'
import request from 'superagent'

import Image from './Image'
import Arrow from './Arrow'
import Dots from './Dots'

import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

function Slider () {  
  const [state, setState] = useState({
    photos: [],
    currentIndex: 0
  })

  const { photos, currentIndex} = state
  
  useEffect(() => {
    fetchPhotos()
  }, [])

  function fetchPhotos () {
    const APILINK = 'https://api.unsplash.com/photos/random/?count=10&'
    const APICLIENT = 'client_id=TnyS4LWeYNLHw-Uebddv7oZwfZMUPcwsBplj2zZHYbc'
    request
    .get(APILINK + APICLIENT)
    .then((res) => {
      setState({...state, photos: res.body})
    })
  }

  function nextSlide() {
    if (currentIndex === photos.length - 1) {
      return setState({
        ...state, 
        currentIndex: 0
      })
    }

    setState({
      ...state, 
      currentIndex: currentIndex + 1
    })
  }

  function prevSlide() {
    if (currentIndex === 0) {
      return setState({
        ...state,
        currentIndex: photos.length - 1
      })
    }
  }

  return (
    <article className='carousel'>
      <Arrow direction='left' clickFunction={prevSlide} icon={<BiLeftArrow />} />
      <Arrow direction='right' clickFunction={nextSlide} icon={<BiRightArrow />} />
      {photos.map((photo) => {
        if (photos.indexOf(photo) === currentIndex) {
          return (
            <Image key={photo.id} url={photo.urls.regular} />
          )
        }
      })}
    </article>
  )
}

export default Slider
