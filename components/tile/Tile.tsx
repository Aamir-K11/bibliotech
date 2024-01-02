import React from 'react'
import './styles.css'
import Image from 'next/image'

interface Props {
    imageSrc: string
    imageAlt: string
    title: string
    description: string
}

const Tile = ({ imageSrc, imageAlt, title, description }: Props) => {
    return (
        <div className="tile_container">
            <Image alt={imageAlt} src={imageSrc} width={80} height={80} />
            <div className="tile_details">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Tile
