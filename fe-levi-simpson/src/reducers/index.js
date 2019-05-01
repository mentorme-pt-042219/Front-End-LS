import {combineReducers} from 'redux';
import {UserReducer} from './UserReducer';
import {QuestionReducer} from './QuestionReducer';
import {AnswerReducer} from './AnswerReducer';

export default combineReducers({
  UserReducer,
  QuestionReducer,
  AnswerReducer
});