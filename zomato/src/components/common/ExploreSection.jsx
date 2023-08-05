import React from 'react'
import '../../stylecss/exploreSection.css'
import ExploreCard from './ExploreCard'
function ExploreSection({list, collectionName}) {
  return (
    <div className='Explore-section-items'>
    <div className="max-width">
        <div className='explore-heading'>{collectionName}</div>
        <div className="explore-grid">
          {list.map((res)=>{
            return <ExploreCard res={res}/>
          })}
        </div>
    </div>
    </div>
  )
}

export default ExploreSection
