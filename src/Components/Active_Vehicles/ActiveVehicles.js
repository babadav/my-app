import React from "react";
import "../../../src/scss/welcome-admin.scss";
import "../../scss/active-vehicles.scss";

const ActiveVehicles = ({ data }) => {
  let vehicleData = [];

  vehicleData = data;

  const setVehicleGrid = () => {
    if (!vehicleData.length) {
      return <>Loading...</>;
    }

    return vehicleData.map((item, index) => {
      return (
        <div className={`module__active-vehicles__vehicle-block`}>
          <div className={`module__active-vehicles__vehicle-block__vehicle`}>
            {item.properties.name} has {item.properties.chargeLevel}% charge
            remaining
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className={"module__active-vehicles"}>
        <div className={`module__active-vehicles__header`}>
          <h3>Current active vehicles:</h3>
        </div>
        <div className={`module__active-vehicles__vehicle-grid`}>
          {setVehicleGrid()}
        </div>
      </div>
    </>
  );
};

export default ActiveVehicles;
