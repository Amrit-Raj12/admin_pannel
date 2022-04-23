import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Checkbox,
  Modal,
  Button,
  Row,
  Col,
  Typography,
} from "antd";
import "./login.css";
import ThemeAction from "../../redux/actions/ThemeAction";
import { useSelector, useDispatch } from "react-redux";

const { Title } = Typography;

const Login = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ThemeAction.getTheme());
  });

  const [visible, setVisible] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row justify="center">
        <Col style={{ textAlign: "center" }}>
          <Title>Click to open Login Form</Title>
          <Button type="primary" onClick={() => setVisible(true)}>
            Login
          </Button>
        </Col>
      </Row>
      <Modal
        title="Login"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            style={{ fontSize: "30px" }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            style={{ fontSize: "30px" }}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 4, span: 16 }}
          >
            <Checkbox style={{ fontSize: "14px" }}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            &nbsp;&nbsp;Or{" "}
            <a href="register" style={{ color: "blue" }}>
              register now!
            </a>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Login;
