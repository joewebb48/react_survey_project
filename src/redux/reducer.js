const ADMIN_LOGGED_IN = 'ADMIN_LOGGED_IN';
const ADMIN_LOGGED_OUT = 'ADMIN_LOGGED_OUT';
const SET_SURVEYS = 'SET_SURVEYS';
const SET_SURVEY = 'SET_SURVEY';
const SET_SURVEY_BY_ID = 'SET_SURVEY_BY_ID';
const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';

const initialAdminState = {
  isAuthenticated: false,
  admin: {},
  surveys: [],
  survey: {},
  questions: [],
  options: []
};

// const initSurvey = {
//   title: 'Title of the survey',
//   subTitle: 'Here is description of the survey',
//   questions: []
// };

export default function reducer(state = initialAdminState, action) {
  // console.log('reducer hit');
  switch (action.type) {
    case ADMIN_LOGGED_IN:
      return { ...state, isAuthenticated: true, admin: action.payload };
    case ADMIN_LOGGED_OUT:
      return { ...state, surveys: action.payload };

    case SET_SURVEYS:
      return { ...state, surveys: action.payload };

    case SET_SURVEY:
      console.log('survey case', action.payload);
      return { ...state, survey: action.payload };

    case SET_SURVEY_BY_ID:
      return { ...state, survey: action.payload };

    case UPDATE_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
}

export function adminLoggedIn(admin) {
  return {
    type: ADMIN_LOGGED_IN,
    payload: admin
  };
}

export function adminLoggedOut() {
  return {
    type: ADMIN_LOGGED_OUT
  };
}

export function setSurveys(surveys) {
  return {
    type: SET_SURVEYS,
    payload: surveys
  };
}
export function setSurvey(survey) {
  // console.log('action', survey);
  return {
    type: SET_SURVEY,
    payload: survey
  };
}
export function setSurveyById(xid) {
  return {
    type: SET_SURVEY_BY_ID,
    payload: xid
  };
}
export function updateQuestions(questions) {
  return {
    type: UPDATE_QUESTIONS,
    payload: questions
  };
}
