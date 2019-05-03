import {
    FETCH_QUESTION_LOAD,
    FETCH_QUESTION_SUCCESS,
    FETCH_QUESTION_ERROR,

    FILTER_QUESTION,
    ADD_QUESTION_LOAD,
    ADD_QUESTION_SUCCESS,
  

    DELETE_QUESTION_LOAD,
    DELETE_QUESTION_SUCCESS,
   
    EDIT_QUESTION_LOAD,
    EDIT_QUESTION_SUCCESS,
    EDIT_QUESTION_FAILURE,
    ADD_NEW_QUESTION
  } from '../actions/index';

  const initialState = {
    questions: [],
    deletingQuestion: false,
    addingQuestion: false,
  fetchingQuestion: false,
    filteredQuestions: [],
    error: null,
    isEditing: false,
    edited: false
  };

  export const QuestionReducer= (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QUESTION_LOAD:
        return {
            ...state,
            error: "",
            fetchingQuestion: true,
            questions: []

        };
        case FETCH_QUESTION_SUCCESS:
  
        return{
            ...state,
            error:"",
            fetchingQuestion: false,
            questions: action.payload,
            filteredQuestions: action.payload,
            fetchinQuestion: false,
            error: "",
        }

        case FETCH_QUESTION_ERROR:
        return{
            ...state,
            questions: [],
            fetchingQuestion: false,
            error:"",

        }

        case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        questions: [],
        isFetching: false,
        errors: action.payload
      };
    case DELETE_QUESTION_START:
      return {
        ...state,
        error: null,
        deletingQuestion: true
      };
    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        questions: state.questions.filter(q => q.id !== action.payload),
        error: null,
        deletingQuestion: false
      };

    case DELETE_QUESTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingQuestion: false
      };

        case  ADD_QUESTION_LOAD:
        return{
          ...state,
          error: null,
          questions: [],
          addingQuestion: true
        };
        case ADD_QUESTION_SUCCESS:
        const newQuestion = {
          title: action.payload.title,
          id: action.payload.id,
          body: action.payload.body,
          author: action.payload.author,
          FK_user_id: action.payload.FK_user_id
        }
        return{
            ...state,
            questions: [...state.questions, newQuestion],
            error: null,
            addingQuestion: false
        }
        case FILTER_QUESTION:
        return {
          ...state,
          filteredQuestions: state.questions.filter(question => {
            return question.title.includes(action.payload);
          })
        };
        case FILTER_QUESTION:
        return {
          ...state,
          filteredQuestions: state.questions.filter(question => {
            return question.title.includes(action.payload);
          })
        };
      case EDIT_QUESTION_START:
        return {
          ...state,
          isEditing: true,
          error: null,
          edited: false
        };
      case EDIT_QUESTION_SUCCESS:
        return {
          ...state,
          isEditing: false,
          error: null,
          edited: true,
          questions: action.payload
        };
      case EDIT_QUESTION_FAILURE:
        return {
          ...state,
          isEditing: false,
          error: action.payload,
          edited: false
        };

        default:
        return state;
    }
  };
  
    