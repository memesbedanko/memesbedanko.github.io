import React from 'react'
import Header from '../comps/Header'
import { Link } from 'react-router-dom'
import ListStyle from './styleList.module.css'
import ListPhrase from '../comps/ListPhrase'
const List = () => {
  return (
    <>
      <div className={`${ListStyle['title-flip']}`}>
      <Link to="/"><Header heading="List" testValue="List" /></Link>
      <hr></hr>
      <p id={ListStyle.listAbout}>More than a <strike>simple list</strike><br></br>Oldest at the bottom<br></br>* Marks a message</p>
      </div>
      <div >
        <ListPhrase phrase="Yes" message="" />
        <ListPhrase phrase="No" message="" />
        <ListPhrase phrase="Maybe" message="" />
        <ListPhrase phrase="Can" message="" />


      </div>
    </>
  )
}

export default List