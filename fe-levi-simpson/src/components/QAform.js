import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import {postMessage} from "../actions/index";
import { withRouter } from 'react-router'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const data = [
  {
    value: 'Sole-Proprietorship',
    label: 'Sole-Proprietorship',
  },

  {
    value: 'Partnership',
    label: 'Partnership',
  },
  {
  value: 'Corporation',
  label: 'Corporation',
},
{
  value: 'LLC',
  label: 'LLC',
},
{
  value: 'Cooperative',
  label: 'Cooperative',
},
 
];

class QAform extends React.Component {
  state = {
    newQuestion:{
name:"",

 email:"",
  // Files:"",
}
  }


handleChange = e => {
  e.persist();
  let value = e.target.value;
  this.setState(prevState => ({
      newQuestion: {
          ...prevState.newQuestion,
          [e.target.name]: value
      }
    }));
};

postMessage = e => {
  e.preventDefault();
     this.props.postMessage(this.state.newQuestion);
     this.setState({
         newQuestion: {
            name: "",
            email: ""
         }
     });
     this.props.history.push('/protected');
    };
 
    render() {
    const { classes } = this.props;

    return (
<div>
      <Typography gutterBottom variant="h6">
      ASK A MENTOR
      </Typography>
       <Divider variant="middle" />
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
       id="outlined-name"
          label="User Name"
          name="name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

{/* <TextField
          id="outlined-select-currency"
          select
          label="Type"
          className={classes.textField}
          value={this.state.Type}
          name="Type"
          onChange={this.handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select One"
          margin="normal"
          variant="outlined"
        >
          {data.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}

<TextField
       id="outlined-name"
          label="User Name"
          name="email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
    
{/* <input
  accept="image/*"
  className={classes.input}
  style={{ display: 'none' }}
  onChange={this.handleChange}
  value={this.state.topic}
  name="Files"
  id="raised-button-file"
  multiple
  type="file"
  helperText="Upload Your Profile Pic"
/>
<label htmlFor="raised-button-file">
  <Button variant="raised" component="span" className={classes.button}>
    Upload Files
  </Button>
</label>  */}
  <button onClick={this.postMessage} type="submit"> Add Question</button>
      </form>
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {};
}

const QAform1 = withRouter(QAform);

export default connect(
  mapStateToProps,
  {postMessage } 
)((withStyles(styles)(QAform1)));
