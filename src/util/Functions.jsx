import axios from 'axios'

export const pageCount = (step,listLength) => {
  // this function returns the number of pages
  // step is the number of products per page
  // listLength is length of product list
  const pageCount = listLength < step ? 1 : Math.ceil(listLength / step)
  return pageCount
}

export const getProduct = (setProducts,setlist) => {
  const BASE_URL = 'https://fakestoreapi.com/products'
  axios(BASE_URL)
    .then((res) => {
     
      setProducts(res.data)
      setlist(res.data)

    }).catch((err) => {
      console.log(err)
    });
}