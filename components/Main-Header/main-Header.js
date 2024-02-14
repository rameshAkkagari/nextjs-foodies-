
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'
import classes from './main-Header.module.css'
import Image from 'next/image'
import MainHeaderbackground from './main-Header-background'
import Navlinks from './nav-links'
function mainHeader() {
    
  return (
    <>
    <MainHeaderbackground/>
    <header className={classes.header}>
        <Link href='/' className={classes.logo}>
            <Image src={logo} alt='A plate with food on it' priority/>
            NEXTLEVEL FOOD
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Navlinks href='/meals'>Browse Meals</Navlinks>
                </li>

                <li>
                    <Navlinks href='/community'>Foodies Community</Navlinks>
                </li>

            </ul>
        </nav>
    </header>
    </>
  )
}

export default mainHeader