

const ProductCard = ({item}) => {
  return (

    <div className='cards'>
       <div className="price">
        <h2 >{item.price} $ </h2>
      </div>
      
      <img  src={item.image} alt="" />
     
      <div className="card-over">
       <h2 className="title">{item.title}</h2>
      </div>
    </div>
  )
}

export default ProductCard