import React from "react";

const AdditionalFeature = props => {
  console.log("this is inside additional feature button", props.feature.name);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
