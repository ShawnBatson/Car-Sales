import React from "react";

const AddedFeature = props => {
  console.log("this is in added feature, feature name props", props.feature);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          console.log("button clicked");
          props.removeFeature(props.feature);
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
