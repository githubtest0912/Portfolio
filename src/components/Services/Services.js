import React from "react";
import "./Services.css";
import DATA from "../Data";

const Services = () => {
  const card = ({id, img, title, desc }) => {
    return (
      <div className="col-md-4 mb-5 pb-5">
        <div className="card text-center py-5" key={id}>
          <img src={img} className="card-img-top mx-auto p-2" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 mb-4">
            <h1 className="display-5">Services</h1>
            <hr />
          </div>
        </div>
        {/* // cards */}
        <div className="row">
          {DATA.map(card)}
        </div>
      </div>
    </div>
  );
};

export default Services;
