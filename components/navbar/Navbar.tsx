import React from 'react'
import './styles.css'
import { petite } from '@/fonts'
import Image from 'next/image'

const DrawerButton = () => {
    return (
        <button className="drawer">
            <span className="icon">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </span>
        </button>
    )
}
const Navbar = () => {
    return (
        <header>
            <h1 className={petite.className}>BiblioTech</h1>
            <div>
                <div className="search">
                    <Image
                        alt="search-icon"
                        src="/assets/icons/search.svg"
                        width={20}
                        height={20}
                    />
                    <input type="text" placeholder="Search Products"></input>
                </div>
                <div className="nested-menu">
                    <DrawerButton />
                </div>
            </div>
        </header>
    )
}

export default Navbar
