import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import axiosWithAuth from '../utils/AxiosAuth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import {postQuestion, getQuestion} from '../actions/index';
import { withRouter } from 'react-router'

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


class QAform extends React.Component {
  state = {
    question:{

title:"",
body:"",
author: "",
FK_user_id:null
  // Files:"",
}
  }

  componentDidMount() {
    axiosWithAuth()
      .get('https://mentor-mee.herokuapp.com/auth/decode')
      .then(res =>
        this.setState(prevState => ({
          question: {
            ...prevState.question,
            author: res.data.handle,
            FK_user_id: res.data.subject
          }
        }))
      )
      .catch(err => console.log(err));
  }

handleChange = e => {
  e.persist();
  let value = e.target.value;
  this.setState(prevState => ({
      question: {
          ...prevState.newQuestion,
          [e.target.name]: value
      }
    }));
};

// componentWillUnmount() {
//   this.props.getQuestion();
// }

postQuestion = e => {
  e.preventDefault();
     this.props.postQuestion(this.state.qestion);
     this.setState({
      qestion: {
        
          title:"",
          body:"",
       
         }
     });
     this.props.history.push('/QArchives');
    };
 
    render() {
    const { classes } = this.props;
    console.log(this.state.question.author);
    return (
  
<div>
      <Typography gutterBottom variant="h6">
      ASK A MENTOR
      </Typography>
       <Divider variant="middle" />
      <form onSubmit={this.postQuestion} className={classes.container} noValidate autoComplete="off">
        <TextField
       id="outlined-name"
          label="title"
          name="title"
          type="text"
          className={classes.textField}
          value={this.state.question.title}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

<TextField
       id="outlined-name"
          label="body"
          name="body"
          className={classes.textField}
          value={this.state.question.body}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

{/* <TextField
       id="outlined-name"
          label="author"
          name="author"
          className={classes.textField}
          value={this.state.newQuestion.author}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        /> */}

{/* <TextField
       id="outlined-name"
          label="user_id"
          name="user_id"
          className={classes.textField}
          value={this.state.newQuestion.author}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        /> */}

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
  <button onClick={this.postQuestion} type="submit"> Add Question</button>
      </form>
      </div>
    );
  }

}

export default connect(
  null,
  {postQuestion, getQuestion}
)((withStyles)(styles)(QAform));

// export default connect(
//   mapStateToProps,
//   {postQuestion, getQuestion} 
// )((withStyles(styles)(QAform1)));
