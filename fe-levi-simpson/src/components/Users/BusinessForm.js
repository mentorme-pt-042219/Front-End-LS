import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import {postMessage} from "../../actions/index";
import {regUser} from "../../actions/index";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 900,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 200,
    marginRight: 200,
    
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    // marginTop: 16,
  },
  menu: {
    width: 200,
  },
});






class Register extends React.Component {
  state = {
   credentials:{
handle:"",
email:"",
password:""
  // Files:"",
}
  }


handleChange = e => {
  e.persist();
  let value = e.target.value;
  this.setState(prevState => ({
     credentials: {
          ...prevState.credentials,
          [e.target.name]: value
      }
    }));
};

postMessage = e => {
  e.preventDefault();
     this.props.regUser(this.state.credentials);
     setTimeout(() => {
      this.props.history.push('/protected');
    }, 1000);
   
    };
 
    render() {
    const { classes } = this.props;

    return (
<div>
      <Typography gutterBottom variant="h6">
   NEW USER REGISTER
      </Typography>
       <Divider variant="middle" />
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
       id="outlined-name"
          label="UserName"
          name="handle"
          className={classes.textField}
          value={this.state.credentials.handle}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

<TextField
       id="outlined-name"
          label="email"
          name="email"
          className={classes.textField}
          value={this.state.credentials.email}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

<TextField
       id="outlined-name"
          label="password"
          name="password"
          className={classes.textField}
          value={this.state.credentials.password}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />


  <button onClick={this.postMessage} type="submit"> Register</button>
      </form>
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {};
}

// const Register1 = withRouter(BusinessForm);

export default connect(
  mapStateToProps,
  {regUser } 
)((withStyles(styles)(Register)));