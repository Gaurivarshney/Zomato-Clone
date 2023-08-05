import React from 'react'
import '../../stylecss/DileveryCollection.css'
function SliderItems({item}) {
  return (
    <div className='Slider-items'>
     <div className="max-width">
         <div className='slider-img'><img src={item.image} alt="...img" /></div>
        <div className='slider-title'>{item.title}</div>       
     </div>

    </div>
  )
}

export default SliderItems
