import React from "react";
import { SideNav, Nav } from "react-sidenav";
import styled from "styled-components";
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as BaseNavigation,
  ExampleBody as Body
} from "./containers";
import { Icon } from "react-icons-kit";
import { dashboard } from "react-icons-kit/fa/dashboard";
import { users } from "react-icons-kit/fa/users";
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import { cubes } from "react-icons-kit/fa/cubes";
import { circleO } from "react-icons-kit/fa/circleO";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import {Link} from "react-router-dom";


const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 40px);
`;

const Navigation = styled(BaseNavigation)`
  background: #303641;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 240px;
  line-height: 22px;
`;

const IconCnt = styled.div`
  color: #6a56a5;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;

const theme = {
  selectionColor: "#FFF",
  hoverBgColor: "#181b20"
};

const Text = styled.div`
  padding-left: 8px;
`;

 class SideNav1 extends React.Component {
  state = { selectedPath: "1" };

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  };

  render() {
    return (
      <AppContainer>
        <Navigation>
          <SideNav
            defaultSelectedPath="1"
            theme={theme}
            onItemSelection={this.onItemSelection}
          >
            <Nav id="1">
              <IconCnt>
                <Icon icon={dashboard} />
              </IconCnt>
              <Text>Dashboard</Text>
             
            </Nav>
            <Nav id="2">
              <IconCnt>
                <Icon icon={users} />
              </IconCnt>
              <Text>Users</Text>
            </Nav>
            <Nav id="3">
              <IconCnt>
                <Icon icon={users} />
              </IconCnt>
              <Text>Questions Archives</Text>
            </Nav>
            <Nav id="4">
              <IconCnt>
                <Icon icon={shoppingCart} />
              </IconCnt>
              <Link className="link" to="/QAform">Ask a Question</Link>
            </Nav>
            <Nav id="5">
              <IconCnt>
                <Icon icon={circleO} />
              </IconCnt>
              <Text>Entrepreneur</Text>
            </Nav>
            <Nav id="6">
              <IconCnt>
                <Icon icon={cubes} />
              </IconCnt>
              <Text>Volunteer</Text>
            </Nav>
          </SideNav>
        </Navigation>
     
      </AppContainer>
    );
  }
}

export default SideNav1;