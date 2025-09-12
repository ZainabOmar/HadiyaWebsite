import React, { useEffect, useState } from "react";

export const Orders = (props) => {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetch("http://localhost:8888/jsonapi/node/giftbox", { credentials: "include" })
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);})

  return (
    <div id="orders" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2> اطلب الآن</h2>
          <p>
            قدّم طلبك بسهولة عبر موقعنا الإلكتروني وتمتع بتجربة شراء مريحة وسريعة
          </p>
        </div>

        {/* <div className="row">
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
        </div> */}
      </div>
    </div>
  );
};
