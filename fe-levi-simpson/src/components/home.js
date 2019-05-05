import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import axiosWithAuth from './utils/axiosAuth';




class Home extends React.Component {
  state={
    author: ""
  }

  componentDidMount() {
    axiosWithAuth()
      .get('https://mentor-mee.herokuapp.com/auth/decode')
      .then(res =>
       
        this.setState(prevState => ({
         author: {
           
            author: res.data.handle,
           
          }
        }))
      )
      .catch(err => console.log(err));
  }



  render() {
 
    
    return ( 
    
    <div className="LWrapper">
<div className="Login">
<h1>WELCOME, {this.state.author}</h1>


</div>

    </div>
    )
  }
}
  


  export default Home;