import React from 'react'
import LogoNav from './LogoNav'
import NavItem from './NavItem'
import NavLogin from './NavLogin'

function Header() {
    return (
        <>
            <header>

               <LogoNav />

                <NavItem />

               <NavLogin />

            </header>
        </>
    )
}

export default Header
