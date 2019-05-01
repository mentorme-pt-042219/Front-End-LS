import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import Button from '@material-ui/core/Button';
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
        username: '',
        password: '',
    }
};

handleChange = e => {
    this.setState({
        credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value

        }
});

};

login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
        this.props.history.push('/QAform');
    });
};




render() {
  const { classes } = this.props;
return (
<div className="Login">
<div class="split left">
  <div class="centered">
    
    <img src={require('../components/images/logo.png')}/>
    {/* <h2>Jane Flex</h2>
    <p>Some text.</p> */}
  </div>
</div>

<div class="split right">
  <div class="centered">

  <form className={classes.container} noValidate autoComplete="off" onSubmit={this.login}>

      <TextField   className={classes.textField}
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
       <TextField   className={classes.textField}
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
<button >
Log-In
</button >
<p>Don't Have An Account? <Button className={classes.button} color="secondary">Register</Button></p>
</form>
  </div>
</div>

</div>
)

}

}

const mapStateToProps = ({ loggingIn }) => ({
 
    loggingIn
  });
  
  export default connect(
    mapStateToProps,
    { login }
  )(withStyles(styles)(Login));
  