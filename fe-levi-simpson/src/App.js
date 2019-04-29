import React from 'react';
import logo from './logo.svg';
import './App.css';
import { browserHistory } from 'react-router'

// import { AppNavigation } from "./AppNavigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { AppContainer, Navigation, Body, Title } from "./components/containers";

// import { Home } from "./Home";
// import { Basic } from "./Basic";
// import { RenderItems } from "./RenderItems";
// import { RenderItems2 } from "./RenderItems2";

import Home from './components/home';
import SideNav1 from './components/SideNav';
import TopNav1 from "./components/TopNav1";
import QAform from './components/QAform';
import QuestionCards from './components/Questions/QuestionCards'
 import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {TopNavH} from './components/containers';
import UserCards from './components/Users/UserCards';
import VolunteerForm from './components/Users/VolunteerForm';
import BusinessForm from './components/Users/BusinessForm';

// const outerTheme4 = createMuiTheme({
//   "palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"rgba(155, 155, 155, 0.1)",
//   "default":"rgba(155, 155, 155, 0.06)"},"primary":{"light":"#7986cb","main":"#3f51b5","dark":"#303f9f",
//   "contrastText":"#fff"},"secondary":{"light":"rgba(65, 117, 5, 0.69)","main":"rgba(126, 211, 33, 1)",
//   "dark":"rgba(65, 117, 5, 0.84)","contrastText":"#fff"},"error":{"light":"rgba(144, 19, 254, 0.64)",
//   "main":"rgba(144, 19, 254, 1)","dark":"rgba(63, 19, 254, 1)","contrastText":"#fff"},
//   "text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"black","disabled":"black",
//   "hint":"black"}}
// })


class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <TopNavH> */}
         {/* <Route path="/" component ={TopNav1}/> */}
         {/* <MuiThemeProvider theme={outerTheme4}> */}
   
         <Route path="/" component ={SideNav1}/>
         <Route  path="/home" component={Home}/>
         <Route  path="/Eform" component={BusinessForm}/>
         <Route  path="/Mform" component={VolunteerForm}/>
      <Route  path="/QArchives" component={QuestionCards}/>
            <Route  path="/QAform" component={QAform}/>
            <Route  path="/Users" component={UserCards}/>
          
           
          
            {/* </MuiThemeProvider> */}
            {/* </TopNavH> */}
      </Router>
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

export default App;