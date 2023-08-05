import React from 'react'
import '../../stylecss/DileveryCollection.css'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import SliderItems from './SliderItems'
import Slider from "react-slick";
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
const dileveryItems=[
    {
        id:1,
        title: "Birayni",
        image: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    },
    {
        id:2,
        title: "Pizza",
        image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:3,
        title: "Thali",
        image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },

    {
        id:4,
        title:" Burger",
        image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:5,
        title:" Chicken",
        image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    }
    ,
    {
        id:6,
        title: "Cake",
        image: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    }
    ,
    {
        id:7,
        image: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        title: "Rolls",
    }
    ,
    {
        id:8,
        title: "North Indian",
        image: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    }
    ,
    {
        id:9,
        title: "Dosa",
        image: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    }
    ,
    {
        id:10,
        title: "Chawmin",
        image: "https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png"
    }
    ,
    {
        id:11,
        title: "Panner",
        image: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    }
    ,
    {
        id:12,
        title: "Chole Bhature",
        image: "https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png"
    }
    
]
var settings = {

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow/>,
    // prevArrow: <PrevArrow/>
  };

function DileveryCollection() {
  return (
    <div className='dilevery-collection-items'>
      <div className="max-width">
        <div className='collection-heading'>Eat What You Want To Eat</div>
    <Slider {...settings}>

        {
            dileveryItems.map((item)=>
                {
                    return <div><SliderItems item={item}/></div>
                }
            )
        }
    </Slider>

        
      </div>
    </div>
  )
}

export default DileveryCollection
