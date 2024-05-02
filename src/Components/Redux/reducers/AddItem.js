const addItem = [];

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];

    case "RemoveItems": // Corrected action type
      return state.filter((x) => x.id !== action.payload.id);

    default:
      return state;
    // Corrected typo in "default"
  }
};

export default addItems;
