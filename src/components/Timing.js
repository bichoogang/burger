import React from 'react'
import { BsClockFill } from "react-icons/bs"
import { ImLocation2 ,ImPhone} from "react-icons/im";
function Timing() {
    return (
        <div className="timing">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-12 offset-0 offset-md-1">
                        <div className="row">
                        <div className="time_card col-12 col-md-4">
                        <div className="card shadow">
                            <BsClockFill/>
                            <h1>Everyday 10:00 am-7:00 pm</h1>
                            <p>Working Hours</p>
                        </div>
                        
                    </div>
                    <div className="time_card col-12 col-md-4">
                        <div className="card shadow">
                            <ImLocation2/>
                            <h1>Kolkata, India</h1>
                            <p>Get Directions</p>
                        </div>
                        
                    </div>
                    <div className="time_card col-12 col-md-4">
                        <div className="card shadow">
                            <ImPhone/>
                            <h1>033-452365</h1>
                            <p>Call Online</p>
                        </div>
                        
                    </div>

                        </div>
                    </div>
                  
                </div>
            </div>
            
        </div>
    )
}

export default Timing
