import React from 'react'
import '../../stylecss/DileveryCollection.css'
function TopBrandsSlider({item}) {
  return (
    <div className='brands-slider'>
     <div className="max-width">
         <div className='brands-img'><img src={item.image} alt="...img" className='brands-cover'/></div>
        <div className='brands-title'>{item.title}</div> 
        <di className="brands-time">{item.time}</di>      
     </div>

    </div>
  )
}

export default TopBrandsSlider
