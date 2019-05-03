import React from 'react';
import logo from './logo.svg';
import './App.css';
import { browserHistory } from 'react-router'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



import SideNav1 from './components/SideNav';
import TopNav1 from "./components/TopNav1";
import QAform1 from './components/QAform';
import QuestionCards from './components/Questions/QuestionCards'
 import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {TopNavH} from './components/containers';
import UserCards from './components/Users/UserCards';

import Register from './components/Users/BusinessForm';
import QAform from './components/QAform';


import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import UpdateQuestion from './components/UpdateQuestion'
import QuestionDetails from './components/QuestionDetails';
import AddAnswer from './components/AddAnswer'; 

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
   
         <Route path="/" component ={SideNav1}/>
         <Route exact path="/" component={Login} />
     
         <Route  exact path="/register" component={Register}/>
         <PrivateRoute  exact path="/Question" component={QuestionCards}/>
         <PrivateRoute exact path="/QAform" component={QAform}/>
     
  <PrivateRoute exact path="/EditQuestion/:id" component={UpdateQuestion}/>
           <PrivateRoute path="/Question/:id" component ={QuestionDetails}/>
           <PrivateRoute path="/Question/:id/add-comment" component ={AddAnswer}/>
    
           
            </div>
        
      </Router>
    );
  }
}


export default App;