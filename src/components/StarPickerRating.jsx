import React, { useState } from 'react';
import StarPicker from 'react-star-picker';

const StarPickerRating = () => {
  const [rating, setRating] = useState();

  const onChange = (value) => {
    setRating(value);
  };

  return (
    <div className='rating'>
      <StarPicker onChange={onChange} value={rating} doubleTapResets halfStars />
      <p>{rating}</p>
    </div>
  );
};

export default StarPickerRating