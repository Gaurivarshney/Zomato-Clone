import React from 'react'
import '../../stylecss/DinningOut.css'
function DinningCard({item}) {
  return (
    <div className='dinning-slider-2 '>
      <div className="dinning-card-img ">
        <img src={item.image} alt="..img" className='dinning-img '/>
        {/* <div className='gradient-bg'></div> */}
        <div className='dinning-title '>{item.title.slice(0,25)}...</div>
        <div className=' dinning-places'>{item.places}</div>
      </div>
    </div>
  )
}

export default DinningCard
