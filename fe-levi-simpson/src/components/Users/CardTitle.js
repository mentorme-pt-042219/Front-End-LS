import React from "react";
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
  },
});
const CardTitle = props => {
  
  return  (
    <div>

    <div className="CardTitle">
       
       <Paper >
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{props.message.name}</Typography>
            <Typography>{props.message.email}</Typography>
          </Grid>
        </Grid>
      </Paper>
     
                </div>
                </div>
  )
};

export default withStyles(styles)(CardTitle);
