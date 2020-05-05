export const getIsPending = (state) => state.apiCalls.apiCallCounter > 0;

export const createPendingSelector = (actions) => {
  return (state) => {
    if (Array.isArray(actions)) {
      for (let i = 0; i < actions.length; i++) {
        if (state.apiCalls[actions[i]]) {
          return true;
        }
      }
      return false;
    } else {
      return !!state.apiCalls[actions];
    }
  };
};
