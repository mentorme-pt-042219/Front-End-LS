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
<div className="Login">
<div class="split left">
  <div class="centered">
    
    <img src={require('../components/images/logo.png')}/>

  </div>
</div>

<div class="split right">
  <div class="centered">

  <form  onSubmit={this.login}>

      <input
            type="text"
            name="handle"
            placeholder="handle"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
       <input  
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
    <input className="btn-sign-in" type="submit" value="SIGN IN" onClick={this.login}/>
<p>Don't Have An Account? <Link to='/register' color="secondary">Register</Link></p>
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
