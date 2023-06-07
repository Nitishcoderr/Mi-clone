import React from 'react'
import '../Style/StartProduct.css'

const StartProduct = ({starProduct}) => {
  return (
    <div className='starProduct'>
      <div>
        <a href={starProduct[0].url}><img src={starProduct[0].image} alt="1st" /></a>
        </div>
      <div>
      <a href={starProduct[1].url}><img src={starProduct[1].image} alt="1st" /></a>
      <a href={starProduct[2].url}><img src={starProduct[2].image} alt="2st" /></a>
      <a href={starProduct[3].url}><img src={starProduct[3].image} alt="3st" /></a>
      </div>
    </div>
    
  )
}

export default StartProduct
