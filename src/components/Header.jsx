
import axios from "axios";
import { useEffect, useState } from "react";

const Header = ({ products, list, setlist }) => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    getCategory()
  }, [])

  const getCategory = () => {
    const CATEGORY_URL = 'https://fakestoreapi.com/products/categories/'
    axios(CATEGORY_URL)
      .then((res) => {
        setCategory(res.data)
        console.log(res.data)

      }).catch((err) => {
        console.log(err)
      });
  }
  const handleClick = (item) => {
    if (item === "all") {
      setlist(products)
    } else {
      setlist(products.filter((pd) => pd.category == item))
    }
  }
  return (

    <div className='header'>
      
      <div className="btn">
        <button onClick={() => handleClick("all")} className="btn">ALL</button>
        {category.map((item,index) => (
          <button key={index} onClick={() => handleClick(item)} className='btn'>{item}</button>
        ))}
      </div>

    </div>

  )
}

export default Header