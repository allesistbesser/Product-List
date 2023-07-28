import React, { useState } from 'react';
import StarPicker from 'react-star-picker';

const StarPickerRating = () => {
  const [rating, setRating] = useState(null);

  const onChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <StarPicker onChange={onChange} value={rating} />
    </div>
  );
};

export default StarPickerRating