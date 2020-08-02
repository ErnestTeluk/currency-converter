import { LOADING_TRUE, LOADING_FALSE } from 'State/Actions/Types';

const INITIALSTATE = {
  isLoading: false,
};

export default (state = INITIALSTATE, actions) => {
  switch (actions.type) {
    case LOADING_TRUE: {
      return { ...state, isLoading: true };
    }
    case LOADING_FALSE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
