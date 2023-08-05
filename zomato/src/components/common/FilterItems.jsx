import React from 'react'
import '../../stylecss/filterItem.css'
function FilterItems({filter}) {
  return (
    <div className='filter-items'>
      {filter.icon && filter.icon}
      <div className='filter-title'>{filter.title}</div>
    </div>
  )
}

export default FilterItems
