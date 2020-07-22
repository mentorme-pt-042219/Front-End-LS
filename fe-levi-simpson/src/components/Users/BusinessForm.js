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

import mentor from '../../assets/mentorLanding.png'

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
      <Landing>
        <LandingDivider>
          <LandingTitleHalf>
            <LoginForm>
              <label>
                User Name
              </label>
              <input type= "text" 
               name="handle"
               placeholder="User Name"
               value={this.state.credentials.handle}
               onChange={this.handleChange}
              />
              <label>
                Email
              </label>
              <input type= "text" 
               type="text"
               label="email"
               name="email"
               placeholder="Email"
               value={this.state.credentials.email}
               onChange={this.handleChange}
              />

<label>
             Password
              </label>
              <input type= "text" 
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.handleChange}

              />

<FormButton type="submit" value="Register" onClick={this.postMessage}>Register</FormButton>
            </LoginForm>

          </LandingTitleHalf>
        </LandingDivider>
      </Landing>

        
         
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

const Wrapper = styled.div`
width: 100%;
height: 100%;
//  border: 1px solid black;

`;

const Landing= styled.div`
background-image: url(${mentor});
background-position: top 10% right 5%;
background-repeat: no-repeat;
//  border: 1px solid purple
padding: 0 0 0 0;
width: 100%;
height: 100%;
// border: 1px solid red;
`;

const LandingDivider=styled.div`
display: flex;
flex-direction: row;
color: #1F66E8;
width: 50%;
`;

 const LandingTitleHalf=styled.div`
 
 width: 60%;
 font-size: 3rem;
 color: black;
 text-align:left;
 font-weight: bold;
 `;

 const LoginForm = styled.form`
//  border: 1px solid red;
 margin-top: 150px;
width: 100%;
 text-align:left;
 display: flex;
flex-direction: column;
justify-content: flex-start;
background: white;
// box-shadow: 0 3px 5px 3px  rgba(0, 0, 0, 0.16); 
padding: .8rem;
margin-left: 200px;
input{
  margin: .5rem;  
 border-radius: 5px;
height: 35px;
 text-decoration: none;
 
}
label{
  margin: .5rem;
font-size: 1.6rem;
}
 `;


 const FormButton=styled.button`
 border-radius: 10px;
  background: #B1DCE8;
  border: 1px solid #B1DCE8;
  width: 30%;
  color: black;
  height: 50px;
 `;
