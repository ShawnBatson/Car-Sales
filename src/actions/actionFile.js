export function remFeature(feature) {
  return {
    type: "REMOVE_FEATURE",
    payload: feature
  };
}

export function addFeature(feature) {
  return {
    type: "ADD_FEATURE",
    payload: feature
  };
}
