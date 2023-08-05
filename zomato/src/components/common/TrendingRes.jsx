import React from 'react'
import '../../stylecss/Trending.css'
import DinningCards from './DinningCards'
import { dinningData } from './DinningData'
function TrendingRes() {
  return (
    <div className='trending-part'>
      <div className='trending-heading'>
        Trending dining restaurants in Bangaluru
      </div>
      <div className='explore-grid'>
        {
            dinningData.map((res)=>{
                return <DinningCards res={res}/>
            })
        }
      </div>
    </div>
  )
}

export default TrendingRes
