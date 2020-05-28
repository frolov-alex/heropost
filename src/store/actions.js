export const setSignInAction = data => dispatch => {
  dispatch({
    data,
    type: 'SET_SIGN_IN',
  });
};

export const setSetupAction = data => dispatch => {
  dispatch({
    data,
    type: 'SET_SETUP',
  });
};

export const setPlatformsAction = data => dispatch => {
  dispatch({
    data,
    type: 'SET_PLATFORMS',
  });
};

export const setActivePageAction = data => dispatch => {
  dispatch({
    data,
    type: 'SET_ACTIVE_PAGE',
  });
};

