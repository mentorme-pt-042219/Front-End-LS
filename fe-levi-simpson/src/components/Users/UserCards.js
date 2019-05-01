import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import QSearchBar from '../Questions/QSearchBar';
import CommentSection from '../Questions/CommentSection';
import Divider from '@material-ui/core/Divider';
import grey from '@material-ui/core/colors/grey';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from "react-redux";
import {Link} from "react-router-dom";

import {getData} from "../../actions/index";
import CardTitle from "../Users/CardTitle";

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    color: grey[900],
  },
});

class UserCards extends React.Component {
  constructor(props) {
    super(props);
  this.state = { 
    
    expanded: false };

}

 componentDidMount() {
    //call our action
    this.props.getData();
  }



  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
  
    return (
   

      <div>
         
      <QSearchBar/>
      
      <Divider variant="middle" />
     
 
  
      <div>
        <Link to="./EForm">
  <button >Register</button>
  </Link>
</div>

        <Card>
          <CardContent>
{this.props.user.map(user => {
            return <CardTitle key={user.name} user={user} />;
          })}
      </CardContent>
      </Card>

   
      </div>
    );
  }
}




// QCards.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

const mstp = ({UserReducer}) => {
  return {
   user: UserReducer.user,
    fetchingMessage: UserReducer.fetchingMessage
  }
}


 export default connect(mstp, {getData:getData})(withStyles(styles)(UserCards));

// export default withStyles(styles)(UserCards);