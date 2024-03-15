import React from 'react';
import Logo from "../assets/FreshHealth.png";
import {Link} from 'react-router-dom';


const Navbar = () => {
  const showNotification = () => {
    alert('Coming Soon!');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">
        <div className="container">
          <div className="d-flex align-items-center">
            <a className="navbar-brand me-auto" href="#">
              <img src={Logo} style={{width: "150px", backgroundColor: "white"}} alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link to={'/'} style={{textDecoration: "none", color: "black"}}>
                <p  style={{padding: "10px"}}>Home</p>
            </Link>
            <Link to={'/about'} style={{textDecoration: "none", color: "black"}}>
                <p style={{padding: "10px"}}>About Us</p>
            </Link>
            <Link to={'/menu'} style={{textDecoration: "none", color: "black"}}>
                <p style={{padding: "10px"}}>Menu</p>
            </Link>
            <p style={{ padding: "10px", cursor: "pointer" }} onClick={showNotification}>Delivery Order</p>
              <Link to={''} style={{textDecoration: "none", color: "black"}}>
                <p className='nav-item ma-2 rounded' style={{padding: "10px", fontWeight: "bold", margin: 0, backgroundColor: "#05f739"}} onClick={showNotification}>Contact Us</p>
            </Link>
        </div>
    </div>
  </div>
    </nav>
    </div>
  );
};

export default Navbar;
