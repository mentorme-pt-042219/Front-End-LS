import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axiosWithAuth from './utils/axiosAuth';
import {deleteQuestion, fetchAnswers} from '../actions';
import AnswersList from './AnswersList';
import SearchBar from '../components/SearchBar';



class QuestionDetails extends Component {
  state = {
    FK_user_id: ''
  };
  componentDidMount() {
    axiosWithAuth()
      .get('https://mentor-mee.herokuapp.com/auth/decode')
      .then(res =>
        this.setState({
          FK_user_id: res.data.subject
        })
      )
      .catch(err => console.log(err));
  }

  onDelete = id => {
    this.props.deleteQuestion(id);
  };

  render() {
    console.log(this.props.questions);
    const question = this.props.questions.find(
      q => `${q.id}` === this.props.match.params.id
    );

    console.log(question);
    return (
      <div>
   <SearchBar/>

        <div className="cardContainer">
  
        <div className="card">


        <Link className="addAnswer" to={`/Question/${question.id}/add-comment`}>
              <i class="fas fa-plus" /> Add answer
            </Link>
        
            <div className="headerQDetails">
              <h2>{question.title}</h2>
           
          <div className="body">
            <p className="body">{question.body}</p>
            
            <div className="details">
              
              <div className="info">
                <p className="author">asked by • {question.author}</p>
                <p>on {moment(question.created_at).format('MMM Do YY')}</p>
              </div>
             
              <div className="buttons">
                {question.FK_user_id === this.state.FK_user_id && (
                  <Link to={`/EditQuestion/${question.id}`}>
                    <i class="fas fa-edit fa-2x" />
                  </Link>
                )}
                {question.FK_user_id === this.state.FK_user_id && (
                  <Link
                    onClick={() => this.onDelete(question.id)}
                    to="/Question"
                  >
                    <i class="far fa-trash-alt fa-2x" />
                  </Link>
                )}
              </div>
            
            </div> {/*dtails*/}
          </div>  {/*body*/}
          <div className="answer-title">
            <h1>Answers</h1>
          </div>  {/*headerQdetails*/}
          <div className="answers-list" />
          <AnswersList answers={this.props.questions.answers} {...this.props} />
        </div>  {/*answer list*/}
        </div> {/*card*/}
        </div> {/*card container*/}

    </div>
    );
  }
}

const mapStateToProps = ({QuestionReducer, AnswerReducer, UserReducer}) => {
  console.log(QuestionReducer);
  return {
    questions: QuestionReducer.questions,
    isAuthenticated:UserReducer.isAuthenticated,
    answers: AnswerReducer.answers
  };
};

export default connect(
  mapStateToProps,
  {deleteQuestion, fetchAnswers}
)(QuestionDetails);