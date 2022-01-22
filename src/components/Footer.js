import React from 'react'

function Footer() {
    return (
        <div className="foot">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 foot_left">
                        <ol>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#contact">Contact</a></li>
                            {/* <li className="orderonline"><a href="#">Order Online</a></li> */}
                        </ol>
                    </div>
                    <div className="col-md-6 col-12 foot_right">
                        <p>© 2021. All Rights Reserved to Burger .</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
