import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Home = () => {

  const [products, setProducts] = useState([])
  const [list, setlist] = useState([])
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  // sayfada kac ürün görmek istiyorsun  productCount
  let productCount = 4
  // sayfa sayisi pageCount
  let pageCount = list.length < productCount ? 1 : Math.floor(list.length / productCount)
  
  const step = list.length / pageCount

  useEffect(() => {
    getProduct()
  }, [])

  useEffect(()=>{
    setPage(1)
  },[list])

  const getProduct = () => {
    const BASE_URL = 'https://fakestoreapi.com/products'
    axios(BASE_URL)
      .then((res) => {
        setProducts(res.data)
        setlist(res.data)

      }).catch((err) => {
        console.log(err)
      });
  }
  console.log(list.length);
  return (
    <div className='main-container'>
      <Header products={products} list={list} setlist={setlist} />
      <Stack spacing={2} className='card-container'>
        <Typography>Page: {page}</Typography>
        <Pagination count={list.length / step} page={page} onChange={handleChange} />
      </Stack>
      <div className='card-container'>
        {list.slice((page - 1) * step, (page - 1) * step + step).map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>


    </div>
  )

}

export default Home