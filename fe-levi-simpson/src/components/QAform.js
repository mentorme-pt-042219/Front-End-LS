import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { connect } from "react-redux";
import {addQuestion} from "../actions/index";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: 'Finance',
    label: 'Finance',
  },
  {
    value: 'Marketing',
    label: 'Marketing',
  },
  {
    value: 'Employees',
    label: 'Employees',
  },
];

class QAform extends React.Component {
  constructor(props) {
    super(props);
    this.state={
  newQuestion:{
    user: "",
    topic:"",
    text: ""
  }
  

    // showPassword: false,
  };
  }

  handleChange = e => {
   
    let value = e.target.value;
    this.setState(prevState => ({
        newQuestion: {
            ...prevState.newQuestion,
            [e.target.name]: value
        }
      }));
             
  };

  createNewQ = e => {
    e.preventDefault();
    this.props.addQuestion(this.state.newQuestion);
    this.setState({
      newQuestion:{
        user: "",
        topic:"",
        text: ""
      }
    
    })

  }
 
  // handleClickShowPassword = () => {
  //   this.setState(state => ({ showPassword: !state.showPassword }));
  // };

  
      

render() {

return (
  <div>
    <form>
    <input
        type="text"
        name="user"
        placeholder="user"
        value={this.state.newQuestion.user}
        onChange={this.handleChange}
    />
     <input
         type="text"
         name="topic"
         placeholder="topic"
         value={this.state.newQuestion.topic}
         onChange={this.handleChange}
    />
     <input
       type="text"
       name="text"
       placeholder="text"
       value={this.state.newQuestion.text}
       onChange={this.handleChange}
    />
  
   
    </form>

    <button onClick={this.createNewQ} type="submit">Add Question</button>
    </div>
       
)}
}
        
       


function mapStateToProps (state) {
  return {};
}

export default connect(
  mapStateToProps,
  {addQuestion} 
)(QAform);

