import React from 'react'
import Image from 'next/image'

import aiimg from "../../image/ai-img.jpg"
import cssStyle from './Header.module.css'



const Header = () => {
  return (
 
    <div className={cssStyle.header}>
      <h1>AI Community Pakistan Chapter</h1>
      
      
      <Image src={aiimg} alt="logo" height={100} width={100} /></div>
   
  )
}

export default Header