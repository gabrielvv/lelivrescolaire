import React, { useState } from "react";
import { Layout, Menu, Icon, Badge } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import logo from "logo.svg";
import logoTitle from "logo-title.svg";
import { CandidatList } from "components/candidat"

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
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
                <span>Candidats</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="lls-content-layout">
          {/* <Header className="lls-header lls-header--sticky">
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
            <div className="header-right-section">
              <Badge count={5} className="header-right-section__badge">
                <Icon
                  type="bell"
                  className="header-right-section__bell"
                />
              </Badge>
            </div>
          </Header> */}
          <Content className="lls-content">
            <Switch>
              <Route path="/">
                <CandidatList></CandidatList>
              </Route>
            </Switch>
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
        </Footer> */}
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
