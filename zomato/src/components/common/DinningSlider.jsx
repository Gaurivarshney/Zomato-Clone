import React from 'react'
import Slider from 'react-slick';
import '../../stylecss/DinningOut.css'
import DinningCard from './DinningCard';

const dinningData=[

    {
        id:1,
        image:"https://b.zmtcdn.com/data/collections/ceef46fcba532b770079141856275c4b_1691141476.jpg",
        title: "10 Unique Dining Experiences",
        places: "5 Places"
    },
    {
        id:2,
        image: "https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
        title: "10 Unique Dining Experiences",
        places: "10 Places"
    },
    {
        id:3,
        image: "https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png",
        title: "21 Best Insta-worthy Places",
        places: "20 Places"
    },
    {
        id:4,
        image: "https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg",
        title: "10 Unique Dining Experiences",
        places: "19 places"

    },
    {
        id:5,
        image: "https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg",
        title: "10 Unique Dining Experiences",
        places: "25 PLaces"
    },
    {
        id:6,
        image: "https://b.zmtcdn.com/data/collections/8941ea1049484a5864e7a2aaf7e60f61_1688041977.png",
        title: "10 Celeb-loved Places",
        places: "10 Places"
    },
    {
        id: 7,
        image: "https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
        title: "10 Unique Dining Experiences",
        places: "28 Places"
    },
    {
        id: 8,
        image :"https://b.zmtcdn.com/data/collections/a247de0031551d916cbce6a8401c501f_1674569722.jpg",
        title: "18 Newly Opened Restaurants",
        places :"18 Places"
    }
]

const settings = {

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow/>,
    // prevArrow: <PrevArrow/>
  };

function DinningSlider() {
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

export default DinningSlider
