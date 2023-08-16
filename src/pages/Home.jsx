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

  let countPage = 5
  const step = list.length / countPage

  useEffect(() => {
    getProduct()
  }, [])

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