import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: 'Finance',
    label: 'Finance',
  },
  {
    value: 'Marketing',
    label: 'Marketing',
  },
  {
    value: 'Employees',
    label: 'Employees',
  },
];

class InputAdornments extends React.Component {
  state = {
    question: '',
    password: '',
    weight: '',
    Topic: '',
    // showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  // handleClickShowPassword = () => {
  //   this.setState(state => ({ showPassword: !state.showPassword }));
  // };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* <TextField
          label="Question"
          id="simple-start-adornment"
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        /> */}

        <TextField
          select
          label="Topic"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.Topic}
          onChange={this.handleChange('Topic')}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Question</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.question}
            onChange={this.handleChange('question')}
            startAdornment={<InputAdornment position="start">?</InputAdornment>}
          />
        </FormControl>
        {/* <FormControl
          className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
        >
          <Input
            id="adornment-weight"
            value={this.state.weight}
            onChange={this.handleChange('weight')}
            aria-describedby="weight-helper-text"
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            inputProps={{
              'aria-label': 'Weight',
            }}
          /> */}

          {/* <FormHelperText id="weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);