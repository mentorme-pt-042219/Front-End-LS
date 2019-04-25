import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';


import Typography from '@material-ui/core/Typography';


import TextField from '@material-ui/core/TextField';

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
        
            userName: props.userName,
    comments: props.questions,
//    userImage: props.userImage,
        timeS: props.time,
        text: ""
        }
    }

   

    handleChanges = e => {
        this.setState ({[e.target.name]: e.target.value,
         
                            }); 
                          
                            
    }

 addNewComment = (event, item) => {
     event.preventDefault();
     let username1 = localStorage.getItem('username');
    const newComment = {
        username: `${username1}`,
       text: item
    };

   
    this.setState({
comments: [...this.state.comments, newComment]
    })
    localStorage.setItem("comments", JSON.stringify(newComment));
};



 submitItem = e => {
     e.preventDefault();
     this.addNewComment(e, this.state.text);
     this.setState({text:""});
    localStorage.setItem("text", "");
 }

render() {
    const { classes } = this.props;
return (
   
<div className="commentContainer">
{/* 
{this.state.comments.map((c,i) => 
     <Comment key={i} comment={c}/>)}
     <p className="timestamp">{this.state.timeS}</p> */}

<form noValidate autoComplete="off" 
onSubmit ={this.submitItem} add={this.addNewComment}>
     <DeleteForeverOutlinedIcon />

<BorderColorIcon />
        <TextField
       id="outlined-name"
       type="text"
          label="Answer Question"
       
          value={this.state.text}
          onChange={this.handleChanges}
          margin="normal"
          variant="outlined"
          placeholder="Add a comment..."
        />
        </form>
    
  {/* 
  ^ WILL SHOW USER NAME & COMMENT 
  <form onSubmit ={this.submitItem} add={this.addNewComment}>
            <input 
            className="inputComm"
            type="text"
            value={this.state.text}
            name="text"
            onChange={this.handleChanges}
            placeholder="Add a comment..."
            />

  </form> */}

    </div>

)

}
}

export default CommentSection;

