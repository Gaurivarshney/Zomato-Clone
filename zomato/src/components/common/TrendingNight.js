import React from 'react'
import { nightData } from './Nightdata'
import NightCards from './NightCards'
function TrendingNight() {
  return (
    <div>
      <div className='trending-heading'>
      Nightlife Restaurants in Bengaluru
      </div>
      <div className='explore-grid'>
    {
        nightData.map((res)=>{
            return <NightCards res={res}/>
        })
    }
      </div>
    </div>
  )
}

export default TrendingNight
