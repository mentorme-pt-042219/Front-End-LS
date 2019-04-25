import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';

const Comment = props => {

    return (
        <div className="CommentComp">
<Typography paragraph>{props.comment.username}</Typography>
<Typography  paragraph>
{props.comment.text}
            </Typography>
          
            
            </div>

    )

}

export default Comment;