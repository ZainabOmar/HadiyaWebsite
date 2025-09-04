import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Hadiya <i className="fa fa-gift mx-1"></i> هدية
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                منتجاتنا
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                عن هدية
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                خدماتنا
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                معرض الصور
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                فريق العمل
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
