import { Typography } from "@material-ui/core";
import React from 'react';

class Home extends React.Component {
    render() {
      return (
        <div>
            <Typography paragraph>Home</Typography>
        </div>
      );
    }
  }
  
  // export const createApp = () => {
  //   return class SideNavApp extends React.Component {
  //     render() {
  //       return (
  //         <Router>
  //           <App />
  //         </Router>
  //       );
  //     }
  //   };
  // }
  
  export default Home;