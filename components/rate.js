import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <StarIcon
            key={ratingValue}
            className={`h-6 w-6 ${
              ratingValue <= rating ? 'text-yellow-400' : 'text-gray-300'
            } cursor-pointer`}
            onClick={() => handleRating(ratingValue)}
          />
        );
      })}
      <span className="ml-2">{rating}/5</span>
    </div>
  );
};

export default Rating;
