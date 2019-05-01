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

const currencies = [
  {
    value: 'Entrepreneur',
    label: 'Entrepreneur',
  },
  {
    value: 'Volunteer',
    label: 'Volunteer',
},
 
];



const type = [
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

class BusinessForm extends React.Component {
  state = {
    newUser:{
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
      newUser: {
          ...prevState.newUser,
          [e.target.name]: value
      }
    }));
};

postMessage = e => {
  e.preventDefault();
     this.props.postMessage(this.state.newUser);
     this.setState({
         newUser: {
       handle: "",
         email:"",
         password: ""
         }
     });
     this.props.history.push('/protected');
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
          value={this.state.handle}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

<TextField
       id="outlined-name"
          label="email"
          name="email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

<TextField
       id="outlined-name"
          label="password"
          name="password"
          className={classes.textField}
          value={this.state.password}
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
  <button onClick={this.postMessage} type="submit"> Add User</button>
      </form>
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {};
}

const BusinessForm1 = withRouter(BusinessForm);

export default connect(
  mapStateToProps,
  {postMessage } 
)((withStyles(styles)(BusinessForm1)));