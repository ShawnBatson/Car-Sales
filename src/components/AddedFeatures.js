import React from "react";
import AddedFeature from "./AddedFeature";
import { remFeature } from "../actions/actionFile";
import { connect } from "react-redux";

const AddedFeatures = props => {
  console.log("props in addedFeatures", props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;

// const mapStateToProps = state => {
//   return {
//     id: state.id,
//     item: state.name
//     //this may need to change. I'm not sure where the state is going
//   };
// };
// export default connect(mapStateToProps, { remFeature })(AddedFeatures);

// //object inside connect object is an action object from a separate file.
