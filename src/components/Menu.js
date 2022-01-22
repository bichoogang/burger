import React from 'react'
import { Swiper, SwiperSlide } from "swiper/swiper-react.cjs";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import SwiperCore from 'swiper'
import burger from '../images/burger.png' 
import classic from '../images/classicveg.png' 
import classicveg from '../images/classic_burger.png'
import zingerc from '../images/zingerc.png'
import kfc1 from '../images/kfc1.png'
import kfc2 from '../images/kfc2.png'
import kfc3 from '../images/kfc3.png'
import kfc4 from '../images/kfc4.png'
import kfc5 from '../images/kfc5.png'
import SwiperCore, {
    Pagination,Navigation, Scrollbar
  } from 'swiper/core';
  import "swiper/components/navigation/navigation.min.css";
  import "swiper/components/pagination/pagination.min.css";
  import 'swiper/components/scrollbar/scrollbar.min.css';
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation, Scrollbar]);
function Menu() {
  const list = [{name:"Classic Veg Combo",img:classic,price:"399",type:"Meal" },{name:"Mexican Burger",img:burger,price:"299" , type:
  "Burger"},{name:"Classic Veg Burger",img:classicveg,price:"199", type:"Burger"},{name:"Zinger Burger Combo",img:zingerc,price:"499",type:"Meal"},  {name:"Zinger Bufer",img:kfc1,price:"229", type:"Burger" },
  {name:"Chicken Bucket (Family Pack)",img:kfc2,price:"999", type:"Meal" },{name:"BlueBerry Lemon Juice",img:kfc3,price:"99", type:"Juice" },
  {name:"Coco-Cola(300ml)",img:kfc4,price:"60", type:"Cold-Drinks" },{name:"French Fry",img:kfc5,price:"70", type:"Snacks" }]
  console.log(list)
    return (
        <div className="menu" id="menu">
          <div className="container">
            <div className="text-center">
              <h1>Menu</h1>
            </div>
            <div className="row">
            <Swiper navigation={true} centeredSlides={true}  slidesPerView="auto" loop={true} spaceBetween={30} freeMode={true} pagination={{
  "clickable": true
}} className="mySwiper">
  {
    list.map(val=>{
      return <div className="card">
        <SwiperSlide className="card">
          <div className="card_design">

          </div>
          <img src={val.img} className="img-fluid" alt="sasa"/>
          <div className="menu_detail">
            <p>{val.type}</p>
            <h3>{val.name}</h3>
            <div className="menu_buy">
            <p>₹{val.price}</p>
            {/* <button>Buy Now</button> */}
          </div>
          </div>
          
        </SwiperSlide>
        
      </div>
    })
  }
  
  </Swiper>

            </div>
          </div>
            

        </div>
    )
}

export default Menu
