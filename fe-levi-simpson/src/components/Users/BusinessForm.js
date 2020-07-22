import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { postMessage } from "../../actions/index";
import { regUser } from "../../actions/index";
import styled from "styled-components";
import {history} from "../../App";

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
    credentials: {
      handle: "",
      email: "",
      password: ""
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

  // postMessage = e => {
  //   e.preventDefault();
  //   this.props.regUser(this.state.credentials);
  //   setTimeout(() => {
  //     this.props.history.push('/Question');
  //   }, 1000);

  // };

  postMessage = e => {
    // e.preventDefault();
    this.props.regUser(this.state.credentials)
    history.push("./Question")
  };


  render() {
    const { classes } = this.props;

    return (
      <div className="LWrapper">
        <div className="Login">
          <h1 className="h1Login">
            Register
    </h1>

          <form onSubmit={this.postMessage}>
            <div className="loginInputC">
              <input className="loginInput"
                type="text"

                name="handle"
                placeholder="User Name"
                value={this.state.credentials.handle}
                onChange={this.handleChange}

              />

              <input className="loginInput"
                type="text"
                label="email"
                name="email"
                placeholder="Email"
                value={this.state.credentials.email}
                onChange={this.handleChange}

              />

              <input className="loginInput"
                id="outlined-name"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.handleChange}

              />
            </div>

            <RegisterButton to={"/Question"}className="signupB" type="submit" value="Register" onClick={this.postMessage}>Register</RegisterButton>
          </form>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {};
}

// const Register1 = withRouter(BusinessForm);

export default connect(
  mapStateToProps,
  { regUser }
)((withStyles(styles)(Register)));


const RegisterButton = styled(Link)`
color: white;
text-decoration: none;
font-size: 3rem;
font-weight: bold;
border-radius: 0 10px 10px 0;

padding: 30px 3rem 15px 3rem;
`;