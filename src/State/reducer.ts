export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT": {
      if (state.count < state.maxValue) {
        if (state.maxValue === state.minValue) {
          return {
            ...state,
            count: state.count,
          };
        }
        return {
          ...state,
          count: state.count + 1,
        };
      } else {
        return {
          ...state,
          count: state.count,
        };
      }
    }
    case "DECREMENT": {
      if (state.count <= state.minValue) {
        return {
          ...state,
          count: state.count,
        };
      } else {
        return {
          ...state,
          count: state.count - 1,
        };
      }
    }
    case "RESET":
      if (state.maxValue === state.minValue) {
        return {
          ...state,
          count: state.count,
        };
      }
      return { ...state, count: state.minValue };
    case "MIN-VALUE": {
      return { ...state, minValue: action.minValue };
    }
    case "MAX-VALUE": {
      return { ...state, maxValue: action.maxValue };
    }
    case "SET": {
      if (state.minValue === state.maxValue) {
        return { ...state, errorCounter: true };
      } else {
        return {
          ...state,
          count: state.minValue,
          maxValue: state.maxValue,
          errorCounter: false,
        };
      }
    }
  }
};
