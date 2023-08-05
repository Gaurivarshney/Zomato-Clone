import React from 'react'
import '../../stylecss/Trending.css'

import StarHalfIcon from '@mui/icons-material/StarHalf';
function DinningCards({res}) {
    const name = res?.info?.name?? "";
    const coverImg = res?.info?.image?.url;
    const dileveryTime= res?.order?.deliveryTime;
    const rating = res?.info?.rating?.rating_text;
    const approxPrice = res?.info?.cfo?.text;
    const offers = res?.bulkOffers ?? [];
    const cuisines = res?.info?.cuisine?.map((item)=>item.name).slice(0,3);
    const bottomConatiners = res?.bottomContainers;
    const goldOff = res?.gold?.text;
    const proOff= offers.length > 1 ? offers[0].text :null;
    const discount = offers.length > 1 ? offers[1].text : offers.length===1 ? offers[0].text :null;
    const timing = res?.info?.timing?.text;
    const location = res?.info?.locality?.name;
    const dis = res?.distance;
  return (
    <div className='explore-card'>
        <div className="explore-card-cover">
            <img src={coverImg} alt={name} className='explore-card-image' />
            <div className='dileveryTime'>{dileveryTime}</div>
            {proOff && <div className='pro-off'>{proOff}</div>}
            {goldOff && <div className='gold-off absolute-center'>{goldOff}</div> }
            {discount && <div className='discount absolute-center'>{discount}</div> }
        </div>
        <div className="res-row">
            <div className="res-name">{name.slice(0,20)}...
            </div>
            {
                rating && (
                    <div className="res-rating">
                        {rating}<i className='absolute-center'><StarHalfIcon/></i>
                    </div>
                )
            }
        </div>
        <div className="res-row">
            {
                cuisines.length && <div className='res-cuisine'>
                    {
                        cuisines.map((item,i)=>{
                            return (<span className='res-cuisine-tag'>{item}{i!==cuisines.length-1 && ","} </span>)
                        })
                    }
                </div>
                   
            }
            {approxPrice && <div className='res-price'>{approxPrice}</div> }
        </div>
        <div style={{color: "grey", display:"flex", justifyContent:"space-between"}}>
           <div> {location}</div>
            <span style={{color: "black"}}>{dis}</span>
        </div>
            <div className='timing' style={{color: "red"}}>
                   {timing}
                </div>
        {bottomConatiners.length > 0 &&(
            <div>
                <div className="card-separater"></div>
                <div className="explore-bottom">
                    <img src={bottomConatiners[0]?.image?.url} alt={bottomConatiners[0]?.text} className='explore-bottom-img'/>
                    <div className='res-bottom-text'>{bottomConatiners[0]?.text}</div>
                </div>
                
            </div>
        )}
    </div>
  )
}

export default DinningCards

