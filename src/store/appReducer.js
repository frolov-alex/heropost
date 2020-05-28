const initialState = {
  activePage: 'menu-01',
  signIn: {
    user: '',
    email: '',
    password: '',
    passwordConfirm: '',
    timezone: '+4'
  },
  setup: {
    plan: '',
    members: 0
  },
  socialPlatform: {
    facebook: 0,
    instagram: 0,
    telegram: 0,
    vk: 0,
    youtube: 0
  }
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PAGE':
      return {
        ...state,
        activePage: action.data
      };


    case 'SET_SIGN_IN':
      return {
        ...state,
        signIn: action.data
      };

    case 'SET_SETUP':
      return {
        ...state,
        setup: action.data
      };

    case 'SET_PLATFORMS':
      return {
        ...state,
        socialPlatform: action.data
      };

    default:
      return state;
  }
};

export default appReducer;
