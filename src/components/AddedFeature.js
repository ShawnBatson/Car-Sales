import React from "react";
import { connect } from "react-redux";

const handleClickRemove = {};

const AddedFeature = props => {
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

const mapStateToProps = state => {
  console.log("mapStateToProps in addedFeature", state);
  return {
    feature: state.appReducer.feature
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
