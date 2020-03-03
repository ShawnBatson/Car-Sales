import React from "react";
import { addFeature } from "../actions/actionFile";
import { appReducer } from "../reducers/AppReducer";

const AdditionalFeature = props => {
  console.log("this is inside additional feature button", props.feature);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.addFeature(props.feature)}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
export default AdditionalFeature;
