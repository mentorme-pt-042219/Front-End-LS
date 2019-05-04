import React, { Fragment } from "react";
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteQuestion} from '../../actions/index';
import '../../App.css';

class  QCardsList extends React.Component {
  render() {
  return  (
    <div className="cardContainer">
<div className="card">
      <Link to={`/Question/${this.props.question.id}`}>
        <div className="Question">
            <div className="header">
              <h2>{this.props.question.title}</h2>
          
              <i class="far fa-folder-open fa-2x "></i>
            </div>
            
            <div className="body">
              <p className="author">asked by • {this.props.question.author}</p>
              <p>
                on {moment(this.props.question.created_at).format('MMM Do YY')}
              </p>
              </div>
              
              <div>
              <p>{this.props.question.body}</p>
            </div>
         

          
              </div>
                </Link>
 
  </div>
  </div>
  );
}
}

const mapStateToProps = ({QuestionReducer}) => {
  return {
    questions: QuestionReducer.questions
  };
};

export default connect(
  mapStateToProps,
  {deleteQuestion}
)(QCardsList);
