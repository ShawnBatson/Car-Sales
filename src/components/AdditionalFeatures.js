import React from "react";
import AdditionalFeature from "./AdditionalFeature";

import { addFeature } from "../actions/actionFile";
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  console.log("props in additionalFeatuers", props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature
              addFeature={props.buyItem}
              key={item.id}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    id: state.additionalFeatures.id
    //this may need to change. I'm not sure where the state is going
  };
};
export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
//object inside connect object is an action object from a separate file.
