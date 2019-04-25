import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import BusinessForm from './Users/BusinessForm';
import QAform from '../components/QAform';
import VolunteerForm from './Users/VolunteerForm';
import QCards from './Questions/QuestionCards';
import UserCards from './Users/UserCards';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <LinkTab label="Entrepreneur" href="page1" />
              <LinkTab label="Volunteer" href="page2" />
              <LinkTab label="Ask A Question" href="page4" />
              <LinkTab label="Questions Archives" href="page5" />
              <LinkTab label="Users" href="page6" />
           
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><BusinessForm/></TabContainer>}
          {value === 1 && <TabContainer><VolunteerForm/></TabContainer>}
          {value === 2 && <TabContainer><QAform/></TabContainer>}
          {value === 3 && <TabContainer><QCards/></TabContainer>}
          {value === 4 && <TabContainer><UserCards/></TabContainer>}
          {value === 5 && <TabContainer>Page six</TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);