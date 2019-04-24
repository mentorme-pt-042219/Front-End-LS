import React from 'react';
import logo from './logo.svg';
import './App.css';


// import { AppNavigation } from "./AppNavigation";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";

import { AppContainer, Navigation, Body, Title } from "./components/containers";

// import { Home } from "./Home";
// import { Basic } from "./Basic";
// import { RenderItems } from "./RenderItems";
// import { RenderItems2 } from "./RenderItems2";

import SideNav1 from './components/SideNav';
import QAform from './components/QAform';
import QuestionCards from './components/Questions/QuestionCards';

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        {/* <Navigation> */}
          {/* <Title> React SideNav </Title> */}
          {/* <AppNavigation /> */}
        {/* </Navigation> */}
      
            <Route path="/" component={SideNav1} />
            <Route path="/QArchives" component={QuestionCards}/>
            <Route path="/QAform" component={QAform}/>
            {/* <Route path="//renderitems" component={RenderItems} />
            <Route path="//renderitems2" component={RenderItems2} />
            <Route path="/" exact component={Home} /> */}
        
      
      </AppContainer>
    );
  }
}

export const createApp = () => {
  return class SideNavApp extends React.Component {
    render() {
      return (
        <Router>
          <App />
        </Router>
      );
    }
  };
};
