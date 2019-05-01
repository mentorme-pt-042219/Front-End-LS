import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import NavTabs from './Tabs';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {whiteButton, TopNavD} from './containers';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import TopAppBar from './TopAppBar';


import Home from '@material-ui/icons/Home';
import Bookmarks from '@material-ui/icons/Bookmarks';
import HowToReg from '@material-ui/icons/HowToReg';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import PhonelinkRing from '@material-ui/icons/PhonelinkRing';
import { Typography } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';





const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
  typography: { useNextVariants: true },
});

const outerTheme5 = createMuiTheme({
  "palette":{"common":{"black":"#000","white":"rgba(74, 74, 74, 0.82)"},
  "background":{"paper":"rgba(74, 74, 74, 0.25)","default":"rgba(155, 155, 155, 0.75)"},"primary":{"light":"rgba(133, 17, 62, 1)","main":"rgba(200, 18, 81, 1)","dark":"rgba(206, 20, 91, 1)","contrastText":"rgba(0, 0, 0, 1)"},"secondary":{"light":"#ff4081","main":"rgba(226, 74, 111, 1)","dark":"rgba(197, 17, 74, 1)","contrastText":"rgba(0, 0, 0, 1)"},"error":{"light":"rgba(134, 30, 63, 1)","main":"rgba(201, 33, 98, 1)","dark":"rgba(162, 25, 58, 1)","contrastText":"rgba(0, 0, 0, 1)"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(126, 17, 47, 1)",
  "disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(173, 23, 49, 1)"}}
})


const styles = theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

});



class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const { anchorEl, mobileMoreAnchorEl } = this.state;
   
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    const sideList = (
   <div className={classes.fullList}>
       <MenuList>
       <Link to="/home" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <Home color="primary" /></ListItemIcon>
             Home
            </MenuItem>
            </Link>

            <Link to="/Eform" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
    <ListItemIcon> <HowToReg color="primary" /></ListItemIcon>
             Entrepreneur Register
            </MenuItem>
            </Link>



<Link to="/Mform" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <HowToReg color="primary" /></ListItemIcon>
             Mentor Register
            </MenuItem>
            </Link>   

            <Divider />

            
            
            <Link to="/QAform" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <QuestionAnswer color="primary" /></ListItemIcon>
            Ask A Question
            </MenuItem>
            </Link>


            <Link to="/QArchives" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <Bookmarks color="primary" /></ListItemIcon>
            Archived Questions
            </MenuItem>
            </Link>
         
            
            
               
            <Link to="/protected" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <SupervisedUserCircle color="primary" /></ListItemIcon>
             Directory
            </MenuItem>
            </Link>
            
            <Link to="/" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <NotificationImportant color="secondary" /></ListItemIcon>
          Notifications
            </MenuItem>
            </Link>

            
            
            
     
            </MenuList>
            </div>
          
       
      
    );

    const fullList = (
      <div className={classes.fullList}>

<MenuList>
       <Link to="/home" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <Home color="primary" /></ListItemIcon>
             Home
            </MenuItem>
            </Link>

            <Link to="/Eform" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
    <ListItemIcon> <HowToReg color="primary" /></ListItemIcon>
             Entrepreneur Register
            </MenuItem>
            </Link>



<Link to="/Mform" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <HowToReg color="primary" /></ListItemIcon>
             Mentor Register
            </MenuItem>
            </Link>   

            <Divider />

            
            
            <Link to="/QAform" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <QuestionAnswer color="primary" /></ListItemIcon>
            Ask A Question
            </MenuItem>
            </Link>


            <Link to="/QArchives" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <Bookmarks color="primary" /></ListItemIcon>
            Archived Questions
            </MenuItem>
            </Link>
         
            
            
               
            <Link to="/Users" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <SupervisedUserCircle color="primary" /></ListItemIcon>
             Directory
            </MenuItem>
            </Link>
            
            <Link to="/" style={{ textDecoration: 'none', display: 'block' }}>
        <MenuItem >
      
              <ListItemIcon> <NotificationImportant color="secondary" /></ListItemIcon>
          Notifications
            </MenuItem>
            </Link>

            
            
            
     
            </MenuList>
     
        {/* <List>
        <ListItem >
              <ListItemIcon> <Home color="primary" /></ListItemIcon>
              <ListItemText />Home
            </ListItem>
            <ListItem >
              <ListItemIcon> <HowToReg color="primary" /></ListItemIcon>
              <ListItemText />Volunteer Register
            </ListItem>
            <ListItem >
              <ListItemIcon> <HowToReg color="primary" /></ListItemIcon>
              <ListItemText />Mentor Register
            </ListItem>
           
        </List>
        <Divider />
        <List>
        
            <ListItem >
              <ListItemIcon> <QuestionAnswer color="primary" /></ListItemIcon>
              <ListItemText />Ask A Mentor
            </ListItem>
            <ListItem >
              <ListItemIcon> <NotificationImportant color="secondary" /></ListItemIcon>
              <ListItemText />Notifications
            </ListItem>
            <ListItem>
              <ListItemIcon> <PhonelinkRing color="primary" /></ListItemIcon>
              <ListItemText />Call A Mentor
            </ListItem> 
            <ListItem >
              <ListItemIcon> <SupervisedUserCircle color="primary" /></ListItemIcon>
              <ListItemText /> Directory
            </ListItem>
           
        </List> */}

    
      
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    );

    return (
     
      <div>
        
{/*       
     <TopNavD>
       <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}><MenuIcon/></IconButton>
       
        <whiteButtons onClick={this.toggleDrawer('right', true)}>X</whiteButtons>
        <whiteButtons onClick={this.toggleDrawer('top', true)}>X</whiteButtons>
        <whiteButtons onClick={this.toggleDrawer('bottom', true)}>X</whiteButtons> 
        </TopNavD> */}
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Mentor-Me
            </Typography>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              /> */}
            {/* </div> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}

        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
       
          <div
               
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>

        </Drawer>
  


        <TopNavD>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </Drawer>
        </TopNavD>


        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {fullList}
          </div>
        </Drawer>


        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
     
        {/* <NavTabs/> */}
      </div>
    );
  }
}

// TemporaryDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(TemporaryDrawer);