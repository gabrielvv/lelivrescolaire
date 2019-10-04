import React, { useState } from "react";
import { Layout, Menu, Icon } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import "./App.css";
import logo from "logo.svg";
import logoTitle from "logo-title.svg";
import { StudentList, Student } from "components/student";
import { NotFound, InternalError } from "../errors";
import Mohe from 'components/animations/mohe/Mohe';

const { Content, Sider, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div
            className={
              "app-logo-container " +
              (collapsed ? "app-logo-container--collapsed" : "")
            }
          >
            <img
              src={collapsed ? logo : logoTitle}
              className="app-logo"
              alt="logo"
            />
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="team" />
                <span>Mes élèves</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="lls-content-layout">
          <Content className="lls-content">
            <Switch>
              <Route exact path="/">
                <Redirect to="/classe/1" />
              </Route>
              ,
              <Route path="/classe/:classId" component={StudentList} />
              <Route path="/student/:studentId" component={Student} />
              <Route exact path="/500" component={InternalError} />
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <Mohe />
        </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
