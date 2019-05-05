import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import axiosWithAuth from './utils/axiosAuth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import {addQuestion, getQuestion} from '../actions/index';
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom';


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
  
  <div className="blueHead">
  <div className="logo3">
    <img className="iconL" src={require('./images/logoM.png')} />
      </div> 
      {/* <div className="AuthorL">
      <h2>
     {this.state.question.author}
      </h2>
      </div> */}
     </div>

<div className="formWrapC">
<div className="formWrap">
<div className="askBA">
           <h1>Welcome Back, {this.state.question.author}</h1>
            </div>
     
     <div>
      <h3 className="Qh3">What Would You Like Help With?</h3>
     </div>

       <form  onSubmit={this.postQuestion}>
          
 
           
              <input
              className="SearchInput2"
                onChange={this.handleChange}
                type="text"
                name="title"
                value={this.state.question.title}
                placeholder="Question"
              />
         
           
           
            <div>
            <h3 className="Qh3">Add More Details:</h3>
            </div>


   
       
         <input
              className="SearchInput2"
                onChange={this.handleChange}
                name="body"
                cols="30"
                rows="10"
                value={this.state.question.body}
                placeholder="Details"
              />
          
        
        
        </form>


<div className="askB" onClick={this.postQuestion}>
           <h3><i class="fas fa-user-plus fa-3x"></i> Ask</h3>
            </div> 
       
        
        </div>
        </div>
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


{/* <div className="askB" onClick={this.postQuestion}>
           <h3><i class="fas fa-user-plus fa-3x"></i> Ask</h3>
            </div> */}