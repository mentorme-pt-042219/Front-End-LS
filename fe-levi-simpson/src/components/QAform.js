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
Username:"",
  Title:"",
  Type:"",
  Question:"",
  Files:""
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
          label="User Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />

      

        <TextField
           id="outlined-name"
           label="Title"
           value={this.state.company}
           className={classes.textField}
           onChange={this.handleChange('name')}
           margin="normal"
           variant="outlined"
           helperText="Required*: Title Of Question"
        />

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
          {data.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

       

       
        <TextField
          id="outlined-full-width"
          label="Question"
          style={{ margin: 8 }}
          placeholder="Ask Our Volunteer Mentors A Question"
          helperText="I have a question!"
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
</label> 
  
      </form>
    );
  }
}

// OutlinedTextFields.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(QAform);