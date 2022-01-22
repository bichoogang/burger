import React from 'react'
import { GiHamburger,GiFrenchFries } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
function Items() {
    return (
        <div className="items">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12 offset-0 offset-md-2">
                         <div className="row">
                             <div className="col-md-4 col-12">
                                 <div className="card">
                                     <GiHamburger/>
                                     <h2>Burgers</h2>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                     <a href="#">View All</a>
                                 </div>
                             </div>
                             <div className="col-md-4 col-12">
                                 <div className="card">
                                    <GiFrenchFries/>
                                    <h2>Snacks</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#">View All</a>
                                 </div>
                             </div>
                             <div className="col-md-4 col-12">
                                 <div className="card">
                                     <BiDrink/>
                                     <h2>Drinks</h2>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                     <a href="#">View All</a>

                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items
