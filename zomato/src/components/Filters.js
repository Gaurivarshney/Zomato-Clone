import React from 'react'
import '../stylecss/filter.css'
import FilterItems from './common/FilterItems'


function Filters({filterList}) {
  return (
    <div className='filters'>
      {
        filterList && filterList.map((filter)=>{
            return <FilterItems filter={filter} key={filter.id}/>
        })
      }
    </div>
  )
}

export default Filters
