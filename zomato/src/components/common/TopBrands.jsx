import React from 'react'
import '../../stylecss/DileveryCollection.css'
import Slider from 'react-slick';
import TopBrandsSlider from './TopBrandsSlider';
const brandsItems=[
    {
        id:1,
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp",
        title: "McDonald's",
        time: "20 min"
    },
    {
        id:2,
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
        title: "Burger King",
        time: "28 min"
    },
    {
        id:3,
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
        title: "Subway",
        time: "19 min"
    },
    {
        id:4,
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
        title: "Haldi Ram's",
        time: "30 min"
    },
    {
        id:5,
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
        title: "KFC",
        time: "35 min"
    },
    {
        id:6,
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
        title: "Bikanervala",
        time: "26 min"
    },
    {
        id:7,
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/ff3d2543b65456e19d204cd385ecbb63_1605093994.png?output-format=webp",
        title: "Kaleva",
        time: "19 min"
    },
    {
        id:8,
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp",
        title: "La pino'z pizza",
        time: "27 min"
    },
    {
        id:9,
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png?output-format=webp",
        title: "Chaayos",
        time: "24 min"
    },
    {
        id:10,
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/a175a6938688350fb3da3018da6293db_1625244343.png?output-format=webp",
        title: "Burger Singh",
        time: "25 min"
    },
    
]


const settings = {

    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // nextArrow: <NextArrow/>,
    // prevArrow: <PrevArrow/>
  };
function TopBrands() {
  return (
    <div className='top-brands-items'>
      <div className='max-width'>
        <div className='top-brands-heading'>
            Top Brands For You
        </div>
        <Slider {...settings}>
            {
                brandsItems.map((item)=>{

                    return <TopBrandsSlider item={item}/>

                        
                    
                })
            }
        </Slider>
      </div>
    </div>
  )
}

export default TopBrands
