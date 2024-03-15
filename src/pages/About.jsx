import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";

const Menu = () => {
    return (
        <div>
            <Navbar/>
            <div className="container-lg">
                <br/><br/><br/><br/><br/><br/>
                <h1 style={{color: "red", fontWeight: "bold"}}> About</h1>
                <div className="row">
                    <div className="col-sm-6">
                    <p>
                    Welcome to Fresh Health, where our journey towards promoting well-being began in 2023. Rooted in the vision of providing
                    a haven for health-conscious individuals, Fresh Health is committed to offering a unique dining experience centered
                    around wholesome and nutritious cuisine. Our mission is fueled by the realization that many face the challenge of
                    finding establishments that prioritize health in their menu offerings. Fresh Health stands as a response to this gap,
                    aiming to create a space where individuals can savor delicious, yet health-conscious meals, fostering a balanced and
                    nourishing lifestyle.
                    </p>
                    </div>
                    <div className="col-sm-6 text-end">
                        <img src={food3} alt="" style={{borderRadius: "30px", width: "40%", margin: "10px"}}/>
                        <img src={food4} alt="" style={{borderRadius: "30px", width: "40%"}}/>
                    </div>
                    <div className="col-sm-6">
                    <p>
                     At Fresh Health, our story is one of passion for healthy living and culinary excellence. Founded with the purpose of
                        addressing the limited options for low-calorie and nutritious meals, we have meticulously crafted a menu that reflects
                        our dedication to promoting wellness. Our commitment goes beyond just serving food; it extends to creating an
                        environment where every bite contributes to a healthier, happier you. Join us on this journey towards vibrant health and
                        flavorful experiences at Fresh Health.

                    </p>
                    </div>
                    <div className="col-sm-6 text-end">
                        <img src={food4} alt="" style={{borderRadius: "30px", width: "40%", margin: "10px"}}/>
                        <img src={food3} alt="" style={{borderRadius: "30px", width: "40%"}}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Menu;