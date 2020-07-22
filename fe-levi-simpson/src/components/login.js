import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { login } from '../actions/index';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import mentor from '../assets/mentorLanding.png'

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
<Wrapper>
   
{/*   
  <div className="LWrapper"> */}
  <Landing>
 <LandingDivider>
<LandingTitleHalf>
 <h1>
   MentorMe
   </h1>
  <h2>
  Have Entrepreneur questions?
   </h2>
<h2>
   Connect with Mentors.
   </h2>
 
</LandingTitleHalf>



<LandingTitleHalf>
  <LoginForm>
    
      
 <label>
   User Name
 </label>
 <input type="text" name="handle" placeholder="User Name" 
 value={this.state.credentials.username}
 onChange={this.handleChange}/>

<label>
  Password
 </label>
 <input type="text" name="password" placeholder="Password" 
 value={this.state.credentials.username}
 onChange={this.handleChange}/>

 <FormButton type="submit" value="Sign in" onClick={this.login}>Sign In</FormButton>

<h6>Don't have an account? <Link to='/register'>Register</Link></h6>
  </LoginForm>
</LandingTitleHalf>
</LandingDivider>

 

{/* <div className= "signHeader"> */}
{/* <div className="logo">
    <img className="iconL" src={require('./images/icon.png')} />
      </div> */}
  
{/* <h1 className="h1Login">Sign In</h1>
 
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
</form> */}
 
  {/* </div> */}
  </Landing>
  </Wrapper>
)

}

}

export default connect(
  null,
  {login}
)(Login);


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
