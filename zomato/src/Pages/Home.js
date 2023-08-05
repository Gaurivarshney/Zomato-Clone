import React, { useState } from 'react'
import Header from '../components/common/Header'
import TopOption from '../components/common/TopOption'
import Footer from '../components/common/Footer'
import DileveryPage from '../components/common/DileveryPage';
import DinningOut from '../components/common/DinningOut';
import NightLife from '../components/common/NightLife';
import '../stylecss/CommonStyle.css'


function Home() {
    const [activeTab, setActiveTab] = useState("Dinner");
  return (
    <div>
      <Header/>
      
      
      <TopOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <div className='last-footer'>
      <Footer/>
      </div>
    </div>
  )
}
const getCorrectScreen =(tab)=>{
    switch(tab){
        case "dilevery":
            return <DileveryPage/>
        case "DinningOut":
            return <DinningOut/>
        case "NightLife":
            return <NightLife/>
        default: return <DileveryPage/>
    }
}
export default Home
