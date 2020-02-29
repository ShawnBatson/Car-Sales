import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/addFeatureAction";

const handleClickAdd = {};

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   console.log("mapStateToProps in additional(remove) Feature", state);
//   return {
//     feature: state.appReducer.feature
//   };
// };

// export default connect(mapStateToProps, { addFeature })(AdditionalFeature);

export default AdditionalFeature;
