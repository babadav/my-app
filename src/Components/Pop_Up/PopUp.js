import React from "react";

const Popup = ({ feature }) => {
  const { id, name, description, chargeLevel } = feature.properties;
  return (
    <div id={`popup-${feature.properties.id}`}>
      <h3>{feature.properties.name}</h3>
      {feature.properties.description}
      <div className={"popup-charge-level"}>
        Charge Level: {feature.properties.chargeLevel}%
      </div>
    </div>
  );
};

export default Popup;
