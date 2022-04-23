import React from "react";
import { Button, Typography, Form, Input, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;
const { TextArea } = Input;

const Report = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h2 className="page-header">Reports</h2>
        <div
          style={{ position: "absolute", top: "120px", right: "26px" }}
        ></div>
      </div>
      <div className="row">
        <div
          className="col-12"
          style={{
            backgroundColor: "#fff",
            boxSizing: "border-box",
            padding: "20px",
            overflowY: "scroll",
            height: "700px",
          }}
        >
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "title"]}
                        rules={[{ required: true, message: "Missing Title" }]}
                      >
                        <Input placeholder="Enter Title" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "sub-title"]}
                        rules={[
                          { required: true, message: "Missing Sub-title" },
                        ]}
                      >
                        <Input placeholder="Enter Sub-title" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "para"]}
                        rules={[
                          { required: true, message: "Missing Paragraph" },
                        ]}
                      >
                        <TextArea
                          placeholder="Enter Paragaph"
                          style={{
                            position: "relative",
                            top: "20px",
                            width: "200px",
                          }}
                        />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <div
                      style={{ position: "absolute", top: "0", right: "26px" }}
                    >
                      <Button
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                        type="primary"
                      >
                        New Report
                      </Button>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <Button type="dashed" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
          <Paragraph style={{ fontSize: "18px" }}>
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>

          <Title>Activity</Title>
          <Paragraph style={{ fontSize: "18px" }}>
            <Text type="secondary" underline>
              Time & Activity{" "}
            </Text>{" "}
            - In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Paragraph style={{ fontSize: "18px" }}>
            <Text type="secondary" underline>
              Manual Time Edit{" "}
            </Text>{" "}
            - In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Paragraph style={{ fontSize: "18px" }}>
            <Text type="secondary" underline>
              Break Report{" "}
            </Text>{" "}
            - In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Title>Leave</Title>
          <Paragraph style={{ fontSize: "18px" }}>
            <Text type="secondary" underline>
              Leave Taken{" "}
            </Text>{" "}
            - In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Paragraph style={{ fontSize: "18px" }}>
            <Text type="secondary" underline>
              Leave Balance{" "}
            </Text>{" "}
            - In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>

          <Title>Users</Title>
          <Paragraph style={{ fontSize: "18px" }}>
            <Text type="secondary" underline>
              Lenght of Employment{" "}
            </Text>{" "}
            - In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Paragraph style={{ fontSize: "18px" }}>
            <Text type="secondary" underline>
              Diversity Snapshot{" "}
            </Text>{" "}
            - In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>

          <Title>Performance</Title>
          <Paragraph style={{ fontSize: "18px" }}>
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Title>Introduction</Title>
          <Paragraph style={{ fontSize: "18px" }}>
            In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Title>Requests</Title>
          <Paragraph style={{ fontSize: "18px" }}>
            <Text type="secondary" underline>
              Request Status{" "}
            </Text>{" "}
            - In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Paragraph style={{ fontSize: "18px" }}>
            <Text type="secondary" underline>
              Time to Resolution{" "}
            </Text>{" "}
            - In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
          <Title>Other</Title>
          <Paragraph style={{ fontSize: "18px" }}>
            <Text type="secondary" underline>
              Flaged Posts/Messages{" "}
            </Text>{" "}
            - In the process of internal desktop applications development, many
            different design specs and implementations would be involved, which
            might cause designers and developers difficulties and duplication
            and reduce the efficiency of development.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Report;
