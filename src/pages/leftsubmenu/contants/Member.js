import React from "react";
import { EyeOutlined, MoreOutlined } from "@ant-design/icons";
import { Layout, Typography, Button, Table, Avatar, Tag, Badge } from "antd";

const { Title, Text, Link } = Typography;

const tagStyle = {
  marginLeft: "40px",
};

const txtStyle = {
  color: "gray",
};

const badgeStyle = {
  marginLeft: "40px",
  marginBottom: "20px",
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => (
      <>
        <Avatar>{text}</Avatar>&nbsp;&nbsp;<a>{text}</a>
        <br />
        <Tag style={tagStyle} color="volcano">
          volcano
        </Tag>
      </>
    ),

    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Contact",
    dataIndex: "contact",
    render: (text) => (
      <>
        <Text>{text}</Text>
        <br />
        <a style={txtStyle}>{text}</a>
      </>
    ),
  },
  {
    title: "Location",
    dataIndex: "location",
    render: (text) => (
      <>
        <Text>{text}</Text>
        <br />
        <a style={txtStyle}>{text}</a>
      </>
    ),
  },
  {
    title: "Type",
    dataIndex: "type",
    render: (text) => (
      <>
        <Text>{text}</Text>
        <br />
        <a style={txtStyle}>{text}</a>&nbsp;&nbsp;
        <Badge style={badgeStyle} count={5} />
        &nbsp;&nbsp;
        <EyeOutlined
          style={{
            marginLeft: "20px",
            fontSize: "20px",
            color: "gray",
          }}
        />
        <MoreOutlined
          style={{
            marginLeft: "20px",
            fontSize: "20px",
            color: "gray",
            float: "right",
          }}
        />
      </>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    contact: 32,
    location: "New York No. 1 Lake Park",
    type: "type1",
  },
  {
    key: "2",
    name: "Jim Green",
    contact: 42,
    location: "London No. 1 Lake Park",
    type: "type2",
  },
  {
    key: "3",
    name: "Joe Black",
    user: "raj",
    contact: 32,
    location: "Sidney No. 1 Lake Park",
    type: "type3",
  },
  {
    key: "4",
    name: "Jim Red",
    contact: 32,
    location: "London No. 2 Lake Park",
    type: "type4",
  },
  {
    key: "5",
    name: "Jim Red",
    contact: 32,
    location: "London No. 2 Lake Park",
    type: "type4",
  },
  {
    key: "6",
    name: "Jim Red",
    contact: 32,
    location: "London No. 2 Lake Park",
    type: "type4",
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

const Member = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Title level={5}>Pending Varification</Title>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Member;
