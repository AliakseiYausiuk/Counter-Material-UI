export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 1 };
    }
    case "DECREMENT": {
      return { count: state.count - 1 };
    }
    case "RESET":
      return { count: state.count = 0 };
    case "START-VALUE": {
    }
  }
};
