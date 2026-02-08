import React from 'react'
import Main_bg from '../../components/main_bg/Main_bg'
import './loader.css'

const Loader = () => {
  return (
    <div className='loader_container'>
      <div className="loader"></div>
      <Main_bg/>
    </div>
  )
}

export default Loader
