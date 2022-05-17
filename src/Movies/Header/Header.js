import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <span className={classes.header} onClick={()=>window.scroll(0,0)}><i class="fa fa-video-camera" aria-hidden="true">Entertainment Hub</i></span>
  )
}

export default Header 
