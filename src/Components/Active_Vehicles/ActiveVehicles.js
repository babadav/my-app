import React from "react";
import "../../../src/scss/welcome-admin.scss";

const ActiveVehicles = () => {
  return (
    <>
      <div className={"module__active-vehicles"}>
        <div className={`module__active-vehicles__header`}>
          <h3>You have XXX active vehicles:</h3>
        </div>

        <div className={`module__active-vehicles__vehicle-grid`}>
          <div className={`module__active-vehicles__vehicle-block`}>
            <div className={`module__active-vehicles__vehicle-block__vehicle`}>
              Vehicle
            </div>
            <div className={`module__active-vehicles__vehicle-block__battery-range`}>
              xx
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveVehicles;
