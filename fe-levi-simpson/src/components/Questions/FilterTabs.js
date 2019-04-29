import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function FilterTabs(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar><DoneIcon /></Avatar>}
        label="Sole-Proprietorship"
        clickable
        className={classes.chip}
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar><DoneIcon /></Avatar>}
        label="Partnership"
        clickable
        className={classes.chip}
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
        variant="outlined"
      />
          <Chip
        avatar={<Avatar><DoneIcon /></Avatar>}
        label="Corporation"
        clickable
        className={classes.chip}
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
        variant="outlined"
      />
          <Chip
        avatar={<Avatar><DoneIcon /></Avatar>}
        label="LLC"
        clickable
        className={classes.chip}
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
        variant="outlined"
      />
          <Chip
        avatar={<Avatar><DoneIcon /></Avatar>}
        label="Cooperative"
        clickable
        className={classes.chip}
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
        variant="outlined"
      />
          <Chip
        avatar={<Avatar><DoneIcon /></Avatar>}
        label="All"
        clickable
        className={classes.chip}
        color="primary"
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
        variant="outlined"
      />
     {/* <Chip
    avatar={
        <Avatar>MB</Avatar>
    }
    label="Primary Clickable Chip"
    onDelete={handleDelete}
    className={classes.chip}
    color="secondary"
    variant="outlined"
    clickable
    deleteIcon={<DoneIcon />}
  /> */}
  {/* <Chip
    icon={<FaceIcon />}
    label="Deletable Secondary Chip"
    onDelete={handleDelete}
    className={classes.chip}
    color="secondary"
    variant="outlined"
    clickable
    deleteIcon={<DoneIcon />}
  />  */}
  {/* <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}

      />
      <Chip
        avatar={
            <Avatar>MB</Avatar>
        }
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
        clickable
        deleteIcon={<DoneIcon />}
      /> */}
      {/* <Chip
        icon={<FaceIcon />}
        label="Deletable Secondary Chip"
     
        className={classes.chip}
        color="secondary"
        clickable
        deleteIcon={<DoneIcon />}
      /> */}
    </div>


  );
}

FilterTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterTabs);