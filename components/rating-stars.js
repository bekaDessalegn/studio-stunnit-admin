import React from 'react'
import { Icon } from '@iconify/react';

export default function RatingStars({ ratingCount }) {
    let stars = []
    for (let i = 0; i < 5; ++i) {
        stars.push(<Icon key={i} icon="material-symbols:star-rounded" className={(i < ratingCount ? "text-yellow-600" : "text-gray-400") + " max-md:text-4xl"} />)
    }
    return (
        <div className='flex gap-1'>
            {stars}
        </div>
    )
}
