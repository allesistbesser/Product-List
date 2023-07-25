

const ProductCard = ({item}) => {
  return (

    <div className='cards'>
       <div className="price">
        <h3 >{item.price} $ </h3>
      </div>
      
      <img  src={item.image} alt="" />
     
      <div className="card-over">
       <h2 className="title">{item.title}</h2>
      </div>
    </div>
  )
}

export default ProductCard