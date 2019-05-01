import { Typography } from "@material-ui/core";
import React from 'react';

import { render } from "react-dom";
import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 =
  "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

class Home extends React.Component {
    render() {
      return (
        <div style={styles}>
        {/* <Hello name="Parallax" /> */}
        <Parallax bgImage={image1} rength={-100}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
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