import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import axiosWithAuth from '../../src/utils/axiosAuth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import {addQuestion, getQuestion} from '../actions/index';
import { withRouter } from 'react-router'



class QAform extends React.Component {
  state = {
    question:{
      title:"",
body:"",
author: "",
FK_user_id:null
 
}
  }

  componentDidMount() {
    axiosWithAuth()
      .get('https://mentor-mee.herokuapp.com/auth/decode')
      .then(res =>
       
        this.setState(prevState => ({
          question: {
            ...prevState.question,
            author: res.data.handle,
            FK_user_id: res.data.subject
          }
        }))
      )
      .catch(err => console.log(err));
  }

handleChange = e => {
  e.persist();
  let value = e.target.value;
  this.setState(prevState => ({
      question: {
          ...prevState.question,
          [e.target.name]: value
      }
    }));
};

componentWillUnmount() {
  this.props.getQuestion();
}

postQuestion = e => {
  e.preventDefault();
     this.props.addQuestion(this.state.question);
     this.setState({
      question: {
        
          title:"",
          body:"",
       
         }
     });
     this.props.history.push('/Question');
    };
 
    render() {
 
    console.log(this.state.question.author);
    return (
  
<div>
      <h2>
      ASK A MENTOR
      </h2>
       <form className="AddQuestion" onSubmit={this.postQuestion}>
          <div className="form-content">
            <div className="form-item">
              <input
                onChange={this.handleChange}
                type="text"
                name="title"
                value={this.state.question.title}
                placeholder="Add question..."
              />
            </div>
            <div className="form-item">
              <label htmlFor="body">Give more details</label>
              <textarea
                onChange={this.handleChange}
                name="body"
                cols="30"
                rows="10"
                value={this.state.question.body}
                placeholder="Details..."
              />
            </div>
            <input type="submit" value="Add" />
          </div>
        </form>
     
      </div>
    );
  }

}

export default connect(
  null,
  {addQuestion, getQuestion}
)(QAform);

// export default connect(
//   mapStateToProps,
//   {postQuestion, getQuestion} 
// )((withStyles(styles)(QAform1)));
