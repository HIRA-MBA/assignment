import React from 'react'
import Link from 'next/link'
import Style from './NavBar.module.css'


const NavBar = () => {
  return (
    <div className={Style.NavBar}>
       <ul>
<li><Link href="/about">About</Link></li>
<li><Link href="/contacts">Contact</Link></li>

</ul>

    </div>
  )
}

export default NavBar

