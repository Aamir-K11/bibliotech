import Image from 'next/image'
import React from 'react'
import './styles.css'
import { roboto_mono } from '@/fonts'

interface Props {
    alt: string
    src: string
    title: string
    creator: string
    price: number
    rating?: string
    ratingCount?: string
}

const Card = ({
    src,
    alt,
    title,
    creator,
    price,
    rating,
    ratingCount,
}: Props) => {
    return (
        <div className="card_layout">
            <div className="card_image">
                <Image alt={alt} src={src} width={100} height={200} />
            </div>
            <div className={`card_details ${roboto_mono.className}`}>
                <p className="title">{title}</p>
                <p className="creator">{creator}</p>
                <span>
                    {rating ? rating : 'N/A'}{' '}
                    <span>({ratingCount ? ratingCount : 'N/A'})</span>
                </span>
            </div>
            <div className="price_details">${price}</div>
        </div>
    )
}

export default Card
