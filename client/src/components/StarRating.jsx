import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({ rating = 4 }) => {
  return (
    <div className="flex items-center gap-1">
      {Array(5)
        .fill('')
        .map((_, index) => (
          <img
            key={index}
            src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
            alt="rating star"
            className="h-4.5 w-4.5"
          />
        ))}
    </div>
  )
}

export default StarRating
