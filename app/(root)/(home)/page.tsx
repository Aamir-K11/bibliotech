import React from 'react'
import './styles.css'
import Card from '@/components/card/Card'
import { roboto_mono } from '@/fonts'
import { categories } from '@/constants'
import Tile from '@/components/tile/Tile'

const cards = [
    <Card
        src="/background.jpg"
        alt="some text"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        creator="Some creator"
        price={4}
        rating="4.0"
        ratingCount="4"
    />,
    <Card
        src="/background.jpg"
        alt="some text"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        creator="Some creator"
        price={4}
        rating="4.0"
        ratingCount="4"
    />,
    <Card
        src="/background.jpg"
        alt="some text"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        creator="Some creator"
        price={4}
        rating="4.0"
        ratingCount="4"
    />,
    <Card
        src="/background.jpg"
        alt="some text"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        creator="Some creator"
        price={4}
        rating="4.0"
        ratingCount="4"
    />,
    <Card
        src="/background.jpg"
        alt="some text"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        creator="Some creator"
        price={4}
        rating="4.0"
        ratingCount="4"
    />,
]
const page = () => {
    return (
        <section>
            <div className="container">
                <h2 className={roboto_mono.className}>Staff Picks</h2>
                <div className="row_layout">{cards}</div>
                <h2 className={roboto_mono.className}>Products by Category</h2>
                <div className="grid_container">
                    {categories.map((c) => {
                        return (
                            <Tile
                                imageSrc={c.imageURL}
                                imageAlt={c.name}
                                title={c.name}
                                description={c.description}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default page
