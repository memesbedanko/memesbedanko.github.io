import React from 'react'
import { NavLink } from 'react-router-dom'
import GalleryContainer from '../comps/GalleryContainer'
import Header from '../comps/Header'
import GalleryStyle from '../comps/galleryStyle.module.css'


const gallery = (props) => {
  return (
    <>
    <div className="title-flip">
        <NavLink to="/"><Header heading="Gallery" testValue="Gallery"/></NavLink>
        <hr></hr>
        <p id={`${GalleryStyle['gallery-about']}`}>This is a collection of my works I'd like to showcase.<br></br>Some finished, some unfinished.<br></br> View at your own risk</p>
    </div>
    <GalleryContainer myID="hello" myClass="gallery-container"/> 
    </>
  )
}

export default gallery