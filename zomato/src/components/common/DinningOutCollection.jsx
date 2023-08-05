import React from 'react'
import '../../stylecss/DinningOut.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DinningSlider from './DinningSlider';
import Filters from '../Filters'
import TuneIcon from '@mui/icons-material/Tune';
import GridGoldenratioIcon from '@mui/icons-material/GridGoldenratio';
import CheckOutRes from './CheckOutRes';
import TrendingRes from './TrendingRes';

const filter=[
  {
    id:1,
    icon: <i className='filter-icon'><TuneIcon/></i>,
    title: "Filter",
  },
  {
    id:2,
   
    title: "Rating: 4.0+"
  },
  {
    id:3,
    icon: <i className='filter-icon'><GridGoldenratioIcon/></i>,
    title: "Gold"
  },
  {
    id: 4,
    title: "Outdoor Sitting"
  },
  {
    id:5,
    title: "Serves Alcohol"
  },
  {
    id:6,
    title: "Open Now"
  }
]



function DinningOutCollection() {
  return (
    <div className='max-width'>
      <div className='heading-collection'>Collections</div>
       <div className='heading-subtitle'> <span>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</span>
       <div className='second-span'> <span >All collections in Delhi NCR </span>
        <PlayArrowIcon className='arrow'/> </div>
        </div>
        <div>
            <DinningSlider/>
        </div>
        <div className='max-width'>
      <Filters filterList={filter}/>
    </div>

    <div className='max-width'>
      <CheckOutRes/>
    </div>

    <div className='trendingRes max-width'>
      <TrendingRes/>
    </div>
        
    </div>
  )
}

export default DinningOutCollection
