export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const appReducer = (state = initialState, action) => {
  // console.log("inside App Reducer on appRecuder.js", state);
  switch (action.type) {
    case "ADD_FEATURE":
      const findFeature = state.store.find(item => {
        return item.id === action.payload.id;
      });

      console.log("ADD FEATURE findFeature", findFeature);

      const filterFeature = state.store.filter(item => {
        return item.id !== findFeature.id;
      });

      console.log(filterFeature);

      return {
        ...state,

        additionalPrice: (state.additionalPrice += action.payload.price),

        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },

        additionalFeatures: [...filterFeature]
      };

    case "REMOVE_FEATURE":
      const chosenFeature = state.car.features.find(item => {
        return item.id === action.payload.id;
      });
      const alteredArrayFeatures = state.car.features.filter(item => {
        return item.id !== chosenFeature.id;
      });
      return {
        ...state,

        additionalPrice: (state.additionalPrice -= action.payload.price),

        car: { ...state.car, features: [...alteredArrayFeatures] },

        additionalFeatures: [...state.additionalFeatures, action.payload]
      };

    default:
      return state;
  }
};
