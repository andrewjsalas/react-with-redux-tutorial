const reducer = (state = 0, action) => {
  // Read the action and return the appropriate state
  // Typically use switch statements
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case 'withdraw': 
      return state - action.payload;
    default: 
      return state;
  }
}

export default reducer;