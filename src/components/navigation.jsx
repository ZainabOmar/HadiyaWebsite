import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
    
      {/* Toggler*/}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> 

    {/* Collapsible content */}
      <div
        className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#features" className="nav-link page-scroll">
                منتجاتنا
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link page-scroll">
                عن هدية
              </a>
            </li>
            <li className="nav-item">
              <a href="#orders" className="nav-link page-scroll">
                اطلب الأن
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link page-scroll">
                فريق العمل
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link page-scroll">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
        {/* brand */}
        <a className="navbar-brand page-scroll" href="#page-top">
            Hadiya <i className="fa fa-gift mx-1"></i> هدية
          </a>{" "}
      </div>
    </nav>
  );
};
