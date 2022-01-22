import React, { useEffect } from 'react'
import burger from '../images/burger.png'
import { HiMenuAlt3 ,HiX} from "react-icons/hi";
import $ from 'jquery'

function Navbar() {
    useEffect(()=>{
        $(".mbtn").click(function(){
            $(".menumain").addClass('exmenu')
            $(".xbtn").addClass('xbtn1')
            $(".mbtn").addClass("mbtn1")
        })
        $(".xbtn").click(function(){
            $(".menumain").removeClass('exmenu')
            $(".xbtn").removeClass('xbtn1')
            $(".mbtn").removeClass("mbtn1")

        })

    },[])
    return (
        <div>
            <nav>
                <a href='/#' style={{textDecoration:'none',color:'black'}}>
                <div className="logo">
                    <img src={burger} alt="kk" className="img_fluid"/>
                    <h1>Burgery</h1>
                </div>

                </a>
                
                <div className="menumain">
                    <ol>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#contact">Contact</a></li>
                        {/* <li className="orderonline shadow"><a href="#">Order Online</a></li> */}
                    </ol>
                </div>
                <div className="menu_icon">
                    <HiMenuAlt3 className="mbtn"/><HiX className="xbtn"/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
