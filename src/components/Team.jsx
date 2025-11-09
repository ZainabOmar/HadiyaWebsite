import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 offset-md-2 section-title mb-5">
          <h2>فريق العمل</h2>
          <p>
            يتمتّع فريقنا بخبرة واسعة في مجال التصميم الجرافيكي، ويعتمد أحدث تقنيات وأدوات الليزر لإنجاز أعماله بكفاءة وجودة عالية
          </p>
        </div>

        <div className="row justify-content-center">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-10 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
                >
                  <div className="thumbnail text-center">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="team-img img-fluid rounded-circle"
                      style={{
                        objectFit: "cover",
                        width: "200px",
                        height: "200px",
                      }}
                    />
                    <div className="caption mt-3">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
