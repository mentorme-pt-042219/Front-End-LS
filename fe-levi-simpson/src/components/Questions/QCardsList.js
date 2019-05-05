import React, { Fragment } from "react";
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteQuestion} from '../../actions/index';
import '../../App.css';

class  QCardsList extends React.Component {
  render() {
  return  (
    <div className="cardContainer" >

 <Link className="DetailsLink" to={`/Question/${this.props.question.id}`}>
<div className="bubble" >


      <Link className="DetailsLink" to={`/Question/${this.props.question.id}`}>
        <div className="Question">

            <div className="headerQ">
              <h2>{this.props.question.title}</h2>
          
             
            </div>
            
            <div className="bodyQ">
            
              </div>
              
              <div>
              <p>{this.props.question.body}</p>
            </div>
         

            </div>
           
                </Link>
                
              
  </div>
  </Link>



  <div className="AuthorFooter">
  <p className="authorDate">Asked by • {this.props.question.author} On  {moment(this.props.question.created_at).format('MMM Do YY')}</p> 
 
             
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
