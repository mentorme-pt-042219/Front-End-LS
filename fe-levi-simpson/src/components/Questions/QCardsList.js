import React, { Fragment } from "react";
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteQuestion} from '../../actions/index';

class  QCardsList extends React.Component {
  render() {
  return  (
<div>
      <Link to={`/Question/${this.props.question.id}`}>
        <div className="Question">
            <div className="header">
              <h3>{this.props.question.title}</h3>
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
