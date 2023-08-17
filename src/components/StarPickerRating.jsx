import React, { useState , useEffect} from 'react';
import StarPicker from 'react-star-picker';

const StarPickerRating = ({ id }) => {
    
  function load(key) {
    const item = window.localStorage.getItem(key);
    return item != null ? item : [];
  }

  const [star, setstar] = useState(() => load(id));
  const [rating, setRating] = useState();

  const onChange = (value) => {
    setstar({ [id]: value })
    setRating(value);
    window.localStorage.setItem(id, value);
  };

  useEffect(() => {
    setRating(()=>load(id))
}, []);

 
  return (
    <div className='rating'>
      <StarPicker onChange={onChange} value={rating} doubleTapResets />
      <p>{rating}</p>
    </div>
  );
};

export default StarPickerRating