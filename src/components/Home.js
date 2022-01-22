import React from 'react'
import burger from '../images/burger.png'

function Home() {
    return (
        <div className="home">
            <div className="container-fluid">
            <div className="home_right_circle">
                        
                        </div>
                <div className="row">
                <div className="col-md-6 col-12 home_left order-1 order-md-0">
                    <p>Express food to raise your mood!</p>
                    <h2>Mexican</h2>
                    <h2 className="burtext"><span>Bur</span>ger</h2>
                    <a href='#menu'><button>Menu</button></a> 
                    
                </div>
                <div className="col-md-6 col-12 home_right order-0 order-md-1">
                    <div className="img_card">
                    <img src={burger} alt="ss" className="img-fluid"/>
                    <div className="offprice">
                        <div className="offpricesub">
                        <p>only</p>
                        <h4><span>₹</span>3<span>99</span></h4>
                        </div>
                    </div>

                    </div>
                    
                    {/* <div className="offer">
                        
                    </div> */}
                    
                </div>

                </div>
                
            </div>
            
        </div>
    )
}

export default Home
