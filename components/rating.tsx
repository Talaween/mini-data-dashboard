import React from 'react';
import ReactStars from 'react-stars'

interface RatingProps {
  rating: number;
  totalRatings: number;
}

const Rating: React.FC<RatingProps> = ({ rating, totalRatings }) => {
  return (
    <div className="flex items-center gap-2">
      <ReactStars
        count={5}
        value={rating}
        size={16}
        color1="#e5e7eb"
        color2="#9333ea"
        edit={false}
        half={true}
      />
      <span className="text-sm text-slate-500">({totalRatings})</span>
    </div>
  );
};

export default Rating;