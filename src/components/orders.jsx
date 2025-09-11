import React, { useEffect, useState } from "react";

export const Orders = (props) => {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetch("http://127.0.0.1:8888/jsonapi/node/orders", 
      { method: "GET",
      credentials: "include", // only if supportsCredentials: true
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("Drupal response:", data); // 👈 check structure
        setOrders(data.data || data); // adapt depending on structure
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Drupal data:", err);
        setLoading(false);
      });
  }, []);

    if (loading) return <p>Loading orders...</p>;

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
