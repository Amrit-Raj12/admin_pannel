import React from "react";
import { Layout, Typography, Button } from "antd";
import "./leftsubmenu.css";
import Member from "./contants/Member";
import Member_1 from "./contants/Member_1";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const { Link, Title } = Typography;

const siderStyle = {
  height: "900px",
  backgroundColor: "transparent",
};

const listStyle = {
  paddingTop: "20px",
};

const headerStyle = {
  backgroundColor: "transparent",
};

const LeftSubMenu = () => {
  return (
    <div>
      <Layout>
        <Sider style={siderStyle}>
          <div style={{ padding: "30px" }}>
            <ul style={listStyle}>
              <li className="lnks">
                <Router>
                  <Link href="/leftsubmenu" type="secondary">
                    Members
                  </Link>
                </Router>
              </li>
              <li className="lnks">
                <Link href="#" type="secondary">
                  Teams
                </Link>
              </li>
              <li className="lnks">
                <Link href="#" type="secondary">
                  Roles & Groups
                </Link>
              </li>
            </ul>
          </div>
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <div className="btn_box">
              <Title level={2}>
                <span style={{ marginLeft: "-220px" }}>Users </span>
                <Button
                  type="primary"
                  style={{
                    borderRadius: "8px",
                    float: "right",
                  }}
                >
                  New Member
                </Button>
              </Title>
            </div>
          </Header>
          <Content>
            <Router>
              <Switch>
                <Route exact path="/leftsubmenu/" component={Member} />
              </Switch>
            </Router>
            {/* <Member /> */}
            <br />
            <Member_1 />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LeftSubMenu;
