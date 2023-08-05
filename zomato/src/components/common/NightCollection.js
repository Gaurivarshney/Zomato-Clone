import React from 'react'
import Slider from 'react-slick';
import '../../stylecss/DinningOut.css'
import DinningCard from './DinningCard';

const dinningData=[

    {
        id:1,
        image:"https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
        title: "10 Unique Dining Experiences",
        places: "5 Places"
    },
    {
        id:2,
        image: "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
        title: "10 Unique Dining Experiences",
        places: "10 Places"
    },
  
]

const settings = {

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow/>,
    // prevArrow: <PrevArrow/>
  };

function NightCollection() {
  return (
    <div className='dinning-slider'>
      <Slider {...settings}>
        {
            dinningData.map((item)=>{
                return <div><DinningCard item={item}/></div>
        })
        }
      </Slider>
    </div>
  )
}

export default NightCollection
