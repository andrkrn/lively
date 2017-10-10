import {
  getDataFromPath,
  addSection
} from '../javascripts/firebase';

export const getSection = () => {
  return dispatch => {
    dispatch({ type: "REQUEST/section" });

    getDataFromPath("/sections/")
      .then(sections => {
        dispatch({ type: "OK/section", payload: sections.val() });
      })
      .catch(error => {
        dispatch({ type: "ERROR/section", payload: error });
      });
  }
}

export const createSection = (name) => {
  return dispatch => {
    dispatch({ type: "REQUEST/createSection "});

    addSection(name).then(res => {
      getSection()(dispatch);
      dispatch({ type: "OK/createSection" });
    }).catch(error => {
      dispatch({ type: "ERROR/createSection", payload: error });
    });
  }
}
