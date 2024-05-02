export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
export const removeItem = (product) => {
  return {
    type: "RemoveItems",
    payload: product,
  };
};
