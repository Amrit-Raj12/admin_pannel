import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined, DownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import {
  Typography,
  Space,
  Menu,
  Dropdown,
  Button,
  message,
  Row,
  Col,
  Calendar,
  Alert,
} from "antd";
import moment from "moment"; 
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'

const { Text, Title, Link } = Typography;

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

const latestOrders = {
    header: [
        "Date",
        "Request Type",
        "Message",
        "status"
    ],
    body: [
        {
            date: "16/12/2021-21/12/2021",
            type: "Entitled Leave",
            message: "Holiday Up in Beach",
            status: "Request"
        },
        {
            date: "16/12/2021-21/12/2021",
            type: "Entitled Leave",
            message: "Holiday Up in Beach",
            status: "pending"
        },
        {
            date: "16/12/2021-21/12/2021",
            type: "Entitled Leave",
            message: "Holiday Up in Beach",
            status: "Aprooved"
        },
        {
            date: "16/12/2021-21/12/2021",
            type: "Entitled Leave",
            message: "Holiday Up in Beach",
            status: "Decline"
        }
    ]
}

const orderStatus = {
    "Request": "primary",
    "pending": "warning",
    "Aprooved": "success",
    "Decline": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.date}</td>
        <td>{item.type}</td>
        <td>{item.message}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const User = () => {
  const [value, setValue] = useState(moment(Date.now()));
  const [selectedValue, setSelectedValue] = useState(moment(Date.now()));

  const onSelect = (value) => (setValue(), setSelectedValue(value));

  const onPanelChange = (value) => setValue(value);

  moment.updateLocale("en", {
    weekdaysMin: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  });

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <Alert
        message={`Selected date: ${
          selectedValue && selectedValue.format("YYYY-MM-DD")
        }`}
        className="msg_box"
      />
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <div className="user_box">
                <Avatar size={64} icon={<UserOutlined />} />
                <div className="user_container">
                  <Space direction="vertical">
                    <Text className="user_name">Amrit Raj</Text>
                    <Text className="user_profile" type="secondary">
                      FrontEnd Developer
                    </Text>
                  </Space>
                </div>
              </div>
            </div>
            {/* <div className="card__body"></div>
            <div className="card__footer"></div> */}
          </div>
          <div className="card">
            <div className="card__header">
              <Row>
                <Col className="activity_colL" span={12}>
                  <Space direction="vertical">
                    <Text className="user_name">My activity</Text>
                    <Text className="user_profile" type="secondary">
                      Avg. Activity
                    </Text>
                    <Title level={3}>
                      78%{" "}
                      <span className="prcnt">
                        <ArrowUpOutlined />
                        4%
                      </span>
                    </Title>
                    <Text className="user_profile" type="secondary">
                      Break & Lunch
                    </Text>
                    <Text className="user_profile" type="secondary">
                      Client Name 1
                    </Text>
                    <Text className="user_profile" type="secondary">
                      Client Name 2
                    </Text>
                  </Space>
                </Col>
                <Col className="activity_colR" span={12}>
                  <Space direction="vertical">
                    <Dropdown className="today_dropdown" overlay={menu}>
                      <Button>
                        Today <DownOutlined />
                      </Button>
                    </Dropdown>
                    <Text className="user_profile" type="secondary">
                      Hours Worked
                    </Text>
                    <Title level={3}>6:04:38</Title>
                    <Text
                      style={{ float: "right" }}
                      className="user_profile"
                      type="secondary"
                    >
                      0:29:44
                    </Text>
                    <Text
                      style={{ float: "right" }}
                      className="user_profile"
                      type="secondary"
                    >
                      2:35:55
                    </Text>
                    <Text
                      style={{ float: "right" }}
                      className="user_profile"
                      type="secondary"
                    >
                      5:22:35
                    </Text>
                  </Space>
                </Col>
              </Row>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <Text className="user_leave">Leave Balance</Text>
              <Link className="view_text" href="#" target="_blank">
                View All
              </Link>
              <Row justify="space-between">
                <Col className="Leave_colL" span={8} push={0}>
                  <br />
                  <br />
                  <Space direction="vertical">
                    <Text className="user_title" type="secondary">
                      Entitled
                    </Text>
                    <Title level={3}>21.6</Title>
                    <Text className="user_uses" type="secondary">
                      Used : 7
                    </Text>
                  </Space>
                </Col>

                <Col className="casual_colM" span={8} push={0}>
                  <Space direction="vertical">
                    <Text className="user_casual" type="secondary">
                      Casual
                    </Text>
                    <Title level={3}>7</Title>
                    <Text className="user_uses" type="secondary">
                      Used : 0
                    </Text>
                  </Space>
                </Col>

                <Col className="view_colR" span={8} push={0}>
                  <Space direction="vertical">
                    <Text className="user_sick" type="secondary">
                      Sick
                    </Text>
                    <Title className="user_title" level={3}>
                      8
                    </Title>
                    <Text className="user_uses" type="secondary">
                      Used : 2
                    </Text>
                  </Space>
                </Col>
              </Row>
            </div>
          </div>
          <div className="card">
            <div className="card__header">
              <Text className="user_leave">Anouncements</Text>
              <Link className="view_text" href="#" target="_blank">
                View All
              </Link>
              <div className="anouncement_box">
                <div className="anouncement_txts">
                  <Title level={5} type="secondary">
                    Partnership with ABC col
                    <Text className="partnership_date" type="secondary">
                      22/12/2021
                    </Text>
                  </Title>
                  <Text className="" type="secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </Text>
                </div>
                <div className="anouncement_txts">
                  <Title level={5} type="secondary">
                    Partnership with ABC col
                    <Text className="partnership_date" type="secondary">
                      22/12/2021
                    </Text>
                  </Title>
                  <Text className="" type="secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </Text>
                </div>
                <div className="anouncement_txts">
                  <Title level={5} type="secondary">
                    Partnership with ABC col
                    <Text className="partnership_date" type="secondary">
                      22/12/2021
                    </Text>
                  </Title>
                  <Text className="" type="secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </Text>
                </div>
                <div className="anouncement_txts">
                  <Title level={5} type="secondary">
                    Partnership with ABC col
                    <Text className="partnership_date" type="secondary">
                      22/12/2021
                    </Text>
                  </Title>
                  <Text className="" type="secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </Text>
                </div>
                <div className="anouncement_txts">
                  <Title level={5} type="secondary">
                    Partnership with ABC col
                    <Text className="partnership_date" type="secondary">
                      22/12/2021
                    </Text>
                  </Title>
                  <Text className="" type="secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </Text>
                </div>
                <div className="anouncement_container"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header"></div>
            <div className="card__body">
              <Calendar
                value={value}
                onSelect={onSelect}
                onPanelChange={onPanelChange}
              />
            </div>
            <div className="card__footer"></div>
          </div>
          <div className="col-12">
          <div className='card'>
                        <div className='card__header'>
                            <h3>Lates Orders</h3>
                        </div>
                        <div className='card__body'>
                        <Table
                                headData={latestOrders.header}
                                renderHead={(item, index)=> renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index)=> renderOrderBody(item, index)}
                            />
                        </div>
                        <div className='card__footer'>
                            
                        </div>
                    </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default User;
