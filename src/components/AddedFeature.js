import React from "react";
import { remFeature } from "../actions/actionFile";

const AddedFeature = props => {
  console.log("this is in added feature, feature name props", props.feature);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.remFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
