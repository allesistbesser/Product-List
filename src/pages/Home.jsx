import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'

const Home = () => {

  const [products, setProducts] = useState([])
  const [list, setlist] = useState([])

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
    <>
      <Header products={products} list={list} setlist={setlist} />
      <div className='card-container'>
        {list.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  )

}

export default Home