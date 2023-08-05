import React from 'react'
// import '../../stylecss/DileveryPage.css'
import Filters from '../Filters'
import TuneIcon from '@mui/icons-material/Tune';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DileveryCollection from './DileveryCollection';
import TopBrands from './TopBrands';
import ExploreSection from './ExploreSection';
import { Data } from './TopBrandsData';
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
    title: "Safe and Hygenic"
  },
  {
    id: 4,
    title: "Pure Veg"
  },
  {
    id:5,
    icon: <i className='time-icon'><AccessTimeIcon/></i>,
    title: "Dilevery time"
  },
  {
    id:6,
    title: "Great Offers"
  }
]

const restaurantList = Data;
function DileveryPage() {
  return (
    <>
    <div className='max-width'>
      <Filters filterList={filter}/>
    </div>
    <div className='dileveryCollection'>
    <DileveryCollection/>
    </div>
    <div className="top-brands">
    <TopBrands/>
    </div>
    <div className="explore-section">
      <ExploreSection list={restaurantList} collectionName="Delivery Restaurants In Bangalore"/>
    </div>
    </>
  )
}

export default DileveryPage
