import React from "react";

export const Orders = (props) => {
  return (
    <div id="orders" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2> اطلب الآن</h2>
          <p>
            قدّم طلبك بسهولة عبر موقعنا الإلكتروني وتمتع بتجربة شراء مريحة وسريعة
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="orders-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
