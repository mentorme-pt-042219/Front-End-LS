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
          ...prevState.question,
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
      question: {
        
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
      <input
                onChange={this.handleChange}
                type="text"
                name="title"
                value={this.state.question.title}
                placeholder="Add question..."
              />

       <TextField id="outlined-name"
          label="body"
          name="body"
          className={classes.textField}
          value={this.state.question.body}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />


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
