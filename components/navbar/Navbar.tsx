import React from 'react'
import './styles.css'
import { petite } from '@/fonts'
import Image from 'next/image'
import { Drawer } from '../drawer/Drawer'
import { categories } from '@/constants'

const Navbar = () => {
    return (
        <div className="nav-container">
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
                        <input
                            type="text"
                            placeholder="Search Products"
                        ></input>
                    </div>
                    <div className="mobile-nav">
                        <Drawer />
                    </div>
                </div>
            </header>
            <div className="categories-links">
                <ul>
                    <li key={0}>All</li>
                    {categories.map((c) => (
                        <li key={c.imageURL}>{c.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
