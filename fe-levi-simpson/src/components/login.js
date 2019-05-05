import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { login } from '../actions/index';
import { withStyles } from '@material-ui/core/styles';

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


class Login extends React.Component {
state= {
    credentials: {
      handle: '',
      password: ''
    },
    errors: {}
};

handleChange = e => {
  e.persist();
  this.setState(prevState => ({
    credentials: {
      ...prevState.credentials,
      [e.target.name]: e.target.value
    }
  }));
};


login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
        this.props.history.push('/Question');
    });
};




render() {
  const { classes } = this.props;
return (
  <div>
   
  
  <div className="LWrapper">
<div className="Login">

{/* <div className= "signHeader"> */}
{/* <div className="logo">
    <img className="iconL" src={require('./images/icon.png')} />
      </div> */}
  
<h1 className="h1Login">Sign In</h1>
{/* </div> */}
  <form  onSubmit={this.login}>
<div className="loginInputC">
      <input className="loginInput"
            type="text"
            name="handle"
            placeholder="User Name"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
       <input  className="loginInput"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          </div>
    <input className="signupB" type="submit" value="SIGN IN" onClick={this.login}/>
<p className="loginText">Don't Have An Account? <Link to='/register' className="registerLink">REGISTER </Link></p>
</form>
  </div>
  </div>
  </div>
)

}

}

export default connect(
  null,
  {login}
)(Login);
