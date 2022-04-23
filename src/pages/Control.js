import React from "react";
import { Row, Col, Typography, Divider, Badge } from "antd";
import {
  ContactsOutlined,
  FieldTimeOutlined,
  AuditOutlined,
  LineChartOutlined,
  DashboardOutlined,
  UsergroupDeleteOutlined,
  BookOutlined,
  ControlOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

const style = { padding: "24px 0" };

const icoStyle = {
  position: "absolute",
  top: "30%",
  left: "45%",
  fontSize: "36px",
  color: "#fff",
};

const txtStyle = {
  margin: "120px -20px",
  position: "absolute",
  fontSize: "18px",
};

const Control = () => {
  return (
    <div>
      <h2 className="page-header">Control Center</h2>
      <Row style={{ background: "#fff" }} justify="space-around" gutter={16}>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Text style={{ fontSize: "18px" }} >
              Active Members
            </Text>
            <Title level={3}>
              299<span style={{ fontSize: "14px" }}>/</span>
              <Text style={{ fontSize: "14px" }} >
                415
              </Text>
            </Title>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Text style={{ fontSize: "18px" }} >
              On Leave
            </Text>
            <Title level={3}>26</Title>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Text style={{ fontSize: "18px" }} >
              New Recruits
            </Text>
            <Title level={3}>5</Title>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Text style={{ fontSize: "18px" }} >
              Total Requests
            </Text>
            <Title level={3}>105</Title>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Text style={{ fontSize: "18px" }} >
              Avg. Activity
            </Text>
            <Title level={3}>67%</Title>
          </div>
        </Col>
      </Row>
      <Divider orientation="left">Company</Divider>
      <Row style={{ background: "#fff" }} justify="space-around" gutter={16}>
        <Col className="gutter-row" span={4}>
          <div
            className="gutter_div"
            style={{ backgroundColor: "#FDDFA4", height: "160px" }}
          >
            <div
              style={{
                backgroundColor: "#A3C1EA",
                height: "120px",
                textAlign: "center",
              }}
            >
              <ContactsOutlined style={icoStyle} />
              <Text style={txtStyle} >
                Users
              </Text>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div
            className="gutter_div"
            style={{
              backgroundColor: "#FDDFA4",
              height: "160px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#00CFFF",
                height: "120px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <FieldTimeOutlined style={icoStyle} />
              <Text style={txtStyle} >
                Leave
              </Text>
              <div style={{ position: "absolute", top: "8px", right: "16px" }}>
                <Badge count={55} offset={[10, 10]}></Badge>
              </div>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div
            className="gutter_div"
            style={{
              backgroundColor: "#FDDFA4",
              height: "160px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#DDDAC3",
                height: "120px",
                textAlign: "center",
              }}
            >
              <AuditOutlined style={icoStyle} />
              <Text style={txtStyle} >
                Moderation
              </Text>
              <div style={{ position: "absolute", top: "8px", right: "26px" }}>
                <Badge count={62} offset={[10, 10]}></Badge>
              </div>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div
            className="gutter_div"
            style={{
              backgroundColor: "#FDDFA4",
              height: "160px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#00A1C7",
                height: "120px",
                textAlign: "center",
              }}
            >
              <LineChartOutlined style={icoStyle} />
              <Text style={txtStyle} >
                Reports
              </Text>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div
            className="gutter_div"
            style={{
              backgroundColor: "#FDDFA4",
              height: "160px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#96DEC2",
                height: "120px",
                textAlign: "center",
              }}
            >
              <DashboardOutlined style={icoStyle} />
              <Text style={txtStyle} >
                Performance
              </Text>
            </div>
          </div>
        </Col>
      </Row>
      <Divider orientation="left" />
      <Row style={{ background: "#fff" }} justify="start" gutter={8}>
        <Col className="gutter-row" span={4}>
          <div
            className="gutter_div"
            style={{ backgroundColor: "#FDDFA4", height: "160px" }}
          >
            <div
              style={{
                backgroundColor: "#E09A9A",
                height: "120px",
                textAlign: "center",
              }}
            >
              <UsergroupDeleteOutlined style={icoStyle} />
              <Text style={txtStyle} >
                Offboarding
              </Text>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div
            className="gutter_div"
            style={{
              backgroundColor: "#FDDFA4",
              height: "160px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#C6B5F4",
                height: "120px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <BookOutlined style={icoStyle} />
              <Text style={txtStyle} >
                Asset Register
              </Text>
              <div style={{ position: "absolute", top: "8px", right: "16px" }}>
                <Badge count={55} offset={[10, 10]}></Badge>
              </div>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div
            className="gutter_div"
            style={{
              backgroundColor: "#FDDFA4",
              height: "160px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#D6DDE0",
                height: "120px",
                textAlign: "center",
              }}
            >
              <ControlOutlined style={icoStyle} />
              <Text style={txtStyle} >
                Preferences
              </Text>
              <div style={{ position: "absolute", top: "8px", right: "26px" }}>
                <Badge count={62} offset={[10, 10]}></Badge>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Divider orientation="left">App & Integration</Divider>
      <Row style={{ background: "#fff" }} justify="start" gutter={8}>
      <Col className="gutter-row" span={4}>
          <div
            className="gutter_div"
            style={{
              backgroundColor: "#FDDFA4",
              height: "40px",
              textAlign: "center",
            }}
          >
            <Text style={{position:"relative", top:"10px"}}>Signature Tool</Text>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div
            className="gutter_div"
            style={{
              backgroundColor: "#FDDFA4",
              height: "40px",
              textAlign: "center",
            }}
          >
            <Text style={{position:"relative", top:"10px"}}>Meeting Schedular</Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Control;
