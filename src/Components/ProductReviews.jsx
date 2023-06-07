import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../Style/ProductReviews.css'

const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='productReviews'>
      
      {ProductReviews.map((item,index)=>(
            <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} key={index} />
      ))}
    </div>
  )
}

export default ProductReviews
