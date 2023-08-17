import StarPickerRating from "./StarPickerRating"

const ProductCard = ({item}) => {
  return (
<div>
    <div className='cards'>
       <div className="price">
        <h3 >{item.price} $ </h3>
      </div>
      
      <img  src={item.image} alt="" />
     
      <div className="card-over">
       <h2 className="title">{item.title}</h2>
      </div>
      

    </div>
    <StarPickerRating id={item.id}/>
    </div>
  )
}

export default ProductCard