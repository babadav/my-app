import React from "react";
import "../../../src/scss/welcome-admin.scss";
import fetchFakeData from "../../Data/fetchFakeData";

const ActiveVehicles = () => {
  return (
    <>
      <div className={"module__active-vehicles"}>
        <div className={`module__active-vehicles__header`}>
          <h3>You have 20 active vehicles:</h3>
        </div>
      </div>
    </>
  );
};

export default ActiveVehicles;
