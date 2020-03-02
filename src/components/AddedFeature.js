import React from "react";
import { remFeature } from "../actions/actionFile";

const handleClickRemove = {};

const AddedFeature = props => {
  console.log(
    "this is in added feature, feature name props",
    props.feature.name
  );
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
