import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Food1 from "../assets/catering.jpg";
import Food2 from "../assets/Food.jpg";
import Food3 from "../assets/ricebowl.jpg";
import Food4 from "../assets/baverage.jpg";

const Menu = () => {
    
    return (
        <div>
            <Navbar/>
            <div className="container-lg">
                <br/><br/><br/><br/><br/><br/>
                <h1 style={{textAlign: "center", color: "red", fontWeight: "bold"}}> Our Menu</h1>
                <br/><br/>
                <div className="row">
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food1} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 1</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food2} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 2</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food3} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 3</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food4} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 4</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food1} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 5</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food2} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 6</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food3} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 7</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food4} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 8</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food1} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 9</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food2} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 10</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food3} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 11</h3>
                    </div>
                    <div className="col-sm-2 text-center">
                        <a>
                            <img src={Food4} alt="" style={{width: "150px", borderRadius: "50%", marginRight: "20px"}} />
                        </a>
                        <br/><br/>
                        <h3>Menu 12</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Menu;