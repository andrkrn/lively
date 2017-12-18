import _ from 'lodash';

let initialState = {
  section: []
}

export default (state = initialState, action) => {
  let newState = _.merge({}, state);

  switch (action.type) {
    case "OK/section":
      newState.sections = action.payload;
      return newState
    default:
      return state
  }
}
