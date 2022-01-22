
import React from 'react'
import burgermake from './../images/burger_making.png'
import { AiFillPlayCircle} from "react-icons/ai";
function About() {
    return (
        <div className="about" id="about">
            <div className="about_d">
                        
                        </div>
                        <div className="about_r">
                        
                        </div>
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-md-6 col-12 about_left">
                        <img src={burgermake} alt="sasa" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 col-12 about_right">
                        <h3>About</h3>
                        <h2>Burgers! You Won't Find Anywhere Else With Best Quality Ingredients</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <div className="btnn">
                            <button className="shadow">Learn More</button>
                            <button className="btn_video"><AiFillPlayCircle/>Watch Video</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
