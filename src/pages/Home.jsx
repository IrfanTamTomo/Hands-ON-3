import React from "react";
import FH from "../assets/FreshHealth.png";
import F1 from "../assets/food1.jpg"
import F2 from "../assets/food2.jpg"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
        <Navbar/>    
        <div className="container-lg">
            <div style={{ textAlign: "center" }}>
                <br/><br/><br/><br/>
                <img src={FH} style={{ width: "300px" }} alt="" />
                <h2 style={{ border: "dashed" }}>
                    Inspiring <span style={{ color: "#05f739" }}>Health</span> in Every Dish
                </h2>
            </div>

            <div className="container-lg">
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <>  
                            <br/><br/>
                            <img src={F1} alt="" style={{ width: "250px", borderRadius: "30px", marginRight: "20px" }} />
                            <img src={F2} alt="" style={{ width: "250px", borderRadius: "30px" }} />
                        </>
                    </div>
                    <div className="col-sm-6">
                        <div style={{ textAlign: "center" }}>
                            <br/>
                            <h2 style={{color: "red", fontWeight: "bold"}}>Welcome</h2>
                        </div>
                        <br/><br/>
                        <section>
                            <p className="text-center" style={{fontSize: "20px"}}>
                                Fresh Health, established in 2023, is dedicated to promoting a healthy lifestyle through our specially curated menu of nutritious delights. The inception of Fresh Health was driven by the observation that, despite the growing concern over obesity, there was a scarcity of dining establishments offering truly healthy and low-calorie food options. Our commitment is to provide a haven for those seeking wholesome and delicious meals that contribute to their well-being.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Home;
