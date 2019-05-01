import React from 'react';
import logo from './logo.svg';
import './App.css';
import { browserHistory } from 'react-router'

// import { AppNavigation } from "./AppNavigation";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import { AppContainer, Navigation, Body, Title } from "./components/containers";

// import { Home } from "./Home";
// import { Basic } from "./Basic";
// import { RenderItems } from "./RenderItems";
// import { RenderItems2 } from "./RenderItems2";

import Home from './components/home';
import SideNav1 from './components/SideNav';
import TopNav1 from "./components/TopNav1";
import QAform1 from './components/QAform';
import QuestionCards from './components/Questions/QuestionCards'
 import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {TopNavH} from './components/containers';
import UserCards from './components/Users/UserCards';
import VolunteerForm from './components/Users/VolunteerForm';
import BusinessForm1 from './components/Users/BusinessForm';
import UserView from './components/Users/UserView';


import Login from './components/login';
import ProtectedRoute from './components/ProtectedRoute';

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <TopNavH> */}
         {/* <Route path="/" component ={TopNav1}/> */}
         {/* <MuiThemeProvider theme={outerTheme4}> */}
        
   
         <Route path="/" component ={SideNav1}/>
         <Route path="/login" component={Login} />
         <Route  path="/home" component={Home}/>
         <Route  path="/Eform" component={BusinessForm1}/>
         <Route  path="/Mform" component={VolunteerForm}/>
      <Route  path="/QArchives" component={QuestionCards}/>
            <Route  path="/QAform" component={QAform1}/>
            <ProtectedRoute  path="/protected" component={UserCards}/>
            <Route path="/UserView" component={UserView}/>
          
           
          
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