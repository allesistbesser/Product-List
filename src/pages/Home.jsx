
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { pageCount, getProduct } from '../util/Functions';

const Home = () => {

  const [products, setProducts] = useState([])
  const [list, setlist] = useState([])
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  let step = 8
  // step is the number of products per page for pagination
  const count = pageCount(step, list?.length)

  useEffect(() => {
    getProduct(setProducts, setlist)
  }, [])

  useEffect(() => {
    setPage(1)
  }, [list])

  console.log(list?.length);
  return (
    <div className='main-container'>
      <Header products={products} list={list} setlist={setlist} />
      <Stack spacing={4} className='pagination'>
        <Pagination color="warning" variant="outlined" size="large" count={count} page={page} onChange={handleChange} />
      </Stack>
      <div className='card-container'>
        {list?.slice((page - 1) * step, (page - 1) * step + step).map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>


    </div>
  )

}

export default Home