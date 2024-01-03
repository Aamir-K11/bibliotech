'use client'

import './styles.css'
import { categories } from '@/constants'

const toggle = () => {
    document.querySelector('.overlay')?.classList.toggle('drawer-active')
}

export const Drawer = () => {
    return (
        <>
            <button className="toggle-btn" onClick={toggle}>
                <span className="icon">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </span>
            </button>
            <div className="overlay">
                <div className="drawer scroll">
                    <ul>
                        <li key={0} onClick={toggle}>
                            Back
                        </li>
                        {categories.map((c) => (
                            <li key={c.imageURL}>{c.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
