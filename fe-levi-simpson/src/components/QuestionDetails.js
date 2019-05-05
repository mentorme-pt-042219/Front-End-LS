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
      <div >
   <SearchBar/>

     
  
      

{/* 
        <Link className="addAnswer" to={`/Question/${question.id}/add-comment`}>
              <i class="fas fa-plus" /> Add answer
            </Link> */}

<div className="formWrap1">
<div className="formWrapC1">


            <div className="cardContainer">
        <div>
            <div className="bubbleQD">
              <h2>{question.title}</h2>
           
          <div className="body">
            <p className="body">{question.body}</p>
            </div>  {/*body*/}
            
     
              
             
              <div className="QDBW">
              
              <div clasName="Qlink">
                {question.FK_user_id === this.state.FK_user_id && (
                  <Link className="editLink" to={`/EditQuestion/${question.id}`}>
                    <i className="Qicon" class="fas fa-edit fa-2x" />
                  </Link>
                )}
             
                </div>
                <div className="Qlink">
                {question.FK_user_id === this.state.FK_user_id && (
                  <Link className="deleteLink"
                    onClick={() => this.onDelete(question.id)}
                    to="/Question"
                  >
                    <i className="Ticon"class="far fa-trash-alt fa-2x" />
                  </Link>
                )}
                   </div>
              
              </div>
            
         
        
          </div> {/*bubbleQD*/}

       
          <div className="AuthorFooter2">
  <p className="authorDate">Asked by • {question.author} On  {moment(question.created_at).format('MMM Do YY')}</p> 
          </div> 
</div>


          <div className="answer">
           
          </div>  
          <div />
          <AnswersList answers={this.props.questions.answers} {...this.props} />
     </div>

     
    
            
    <div className="askB" >
    <Link className="addAnswer" to={`/Question/${question.id}/add-comment`}>
           <h3><i class="fas fa-user-plus fa-3x"></i> Answer</h3>
           </Link>
            </div>
     </div>
     </div>
   
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