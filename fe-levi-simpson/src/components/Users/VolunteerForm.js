import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

class VolunteerForm extends React.Component {
  state = {
    FirstName: "",
    LastName: "",
    Company:"",
    Role:"",
    Interest:"",
    Email:"",
    Years:"",
    Username:"",
    Password:"",
    AboutMe:"",
    UserImage:""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
       id="outlined-name"
          label="First Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-name"
          label="Last Name"
          className={classes.textField}
          value={this.state.lastName}
          name="FirstName"
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />

        <TextField
           id="outlined-name"
           label="Company Name"
           name="Company"
           value={this.state.company}
           className={classes.textField}
           onChange={this.handleChange('name')}
           margin="normal"
           variant="outlined"
        />

<TextField
          id="outlined-select-currency"
          select
          label="Role"
          name="Role"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Are you a Entrepreneur or Volunteer?"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency"
          select
          label="Type"
          className={classes.textField}
          value={this.state.currency}
          name="Type"
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select One"
          margin="normal"
          variant="outlined"
        >
          {type.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('name')}
          type="email"
          name="email"
        //   autoComplete="email"
          margin="normal"
          variant="outlined"
        />

     

   

        <TextField
          id="outlined-number"
          label="Years in Business"
          value={this.state.age}
          name="Years"
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />

        
<TextField
          id="outlined-name"
            label="UserName"
            value={this.state.topic}
            name="UserName"
            className={classes.textField}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
            
        />

<TextField
          id="outlined-password-input"
          label="Password"
          name="PassWord"
          value={this.state.topic}
          className={classes.textField}
          onChange={this.handleChange('name')}
          type="password"
        //   autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />


       
        <TextField
          id="outlined-full-width"
          label="About Me"
          name="AboutMe"
          style={{ margin: 8 }}
          placeholder="Short Description About You"
          helperText="Sign me up!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

<input
  accept="image/*"
  className={classes.input}
  style={{ display: 'none' }}
  onChange={this.handleChange('name')}
  value={this.state.topic}
  name="UserImage"
  id="raised-button-file"
  multiple
  type="file"
  helperText="Upload Your Profile Pic"
/>
<label htmlFor="raised-button-file">
  <Button variant="raised" component="span" className={classes.button}>
    Upload A Profile Picture
  </Button>
</label> 
  
      </form>
     
    );
  }
}

// OutlinedTextFields.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(VolunteerForm);