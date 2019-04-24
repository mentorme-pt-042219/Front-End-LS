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
  state = {
  newQuestion:{
    user: "",
    topic:"",
    text: ""

  }

    // showPassword: false,
  };

  handleChange = event => {
    this.setState(prevState => ({ 
      
      newQuestion: {
      ...prevState.newQuestion,
      [event.target.name]: event.target.value 
    
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
      <div >
        {/* <TextField
          label="Question"
          id="simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        /> */}

<FormControl fullWidth >
          <InputLabel htmlFor="adornment-amount">Question</InputLabel>
          <Input
            id="topic"
            name="topic"
            value={this.state.newQuestion.user}
            onChange={this.handleChange}
            startAdornment={<InputAdornment position="start">user</InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth >
          <InputLabel htmlFor="adornment-amount">Question</InputLabel>
          <Input
            id="user"
            name="user"
            value={this.state.newQuestion.user}
            onChange={this.handleChange}
            startAdornment={<InputAdornment position="start">user</InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth >
          <InputLabel htmlFor="adornment-amount">Question</InputLabel>
          <Input
            id="question"
            name="text"
            value={this.state.newQuestion.text}
            onChange={this.handleChange}
            startAdornment={<InputAdornment position="start">?</InputAdornment>}
          />
        </FormControl>
        <button>Add Question</button>
        {/* <FormControl
          className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
        >
          <Input
            id="adornment-weight"
            value={this.state.weight}
            onChange={this.handleChange('weight')}
            aria-describedby="weight-helper-text"
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            inputProps={{
              'aria-label': 'Weight',
            }}
          /> */}

          {/* <FormHelperText id="weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {};
}

export default connect(
  mapStateToProps,
  {addQuestion} 
)(QAform);

