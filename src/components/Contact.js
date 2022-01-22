import React from 'react'
import { AiFillFacebook,AiOutlineWhatsApp,AiFillTwitterSquare,AiFillInstagram ,AiFillBehanceSquare} from "react-icons/ai";

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="ctitle text-center py-5">
                <h1 className="text-center py-2">GET IN  TOUCH</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                </div>
                
                <div className="row main">
                    <div className="col-md-6 col-12 contact_left">
                        <input type="text" placeholder="Enter Your Name"/>
                        <input type="email" placeholder="Enter Your Email"/>
                        <input type="text" placeholder="Enter Your Mobile Number"/>
                        <textarea placeholder="Enter Your Message"/>
                    </div>
                    <div className="col-md-6 col-12 contact_right">
                    <p><span>Address:</span> 35 , Salt Lake Sector-V, S.v.road, Kolkata</p>
                        <p><span>Phones: </span> 033-452365 , 033-452365</p>
                        <p><span>E-mail:</span> info@burger.com</p>
                        <div>
                        <AiFillFacebook/>
                                    <AiOutlineWhatsApp/>
                                    <AiFillTwitterSquare/>
                                    <AiFillInstagram/>
                                    <AiFillBehanceSquare/>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
