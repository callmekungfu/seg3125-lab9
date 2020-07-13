/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-template-curly-in-string */
import React from 'react';
import {
  Form,
  Typography,
  Input,
  Row,
  Col,
  Button,
  Select,
  DatePicker,
  Card,
  List,
  Skeleton,
  Avatar,
} from 'antd';
import { VisionaryCatelog } from '../data/catelog';

const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: 'This is not validate email',
  },
};

const OrderComponent = () => {
  const [form] = Form.useForm();
  return (
    <div>
      <Title level={2}>Rental Request Form</Title>
      <p>
        Your Request will be recieved by our Rental department staff who will
        contact you by phone to confirm your rental. Our Rental team will be
        able to answer questions regarding the equipment you are renting as well
        as recommend compatible equipment choices.
      </p>
      <Row gutter={[30, 30]}>
        <Col span={24}>
          <Card title="Shopping Cart">
            <List
              className="demo-loadmore-list"
              itemLayout="horizontal"
              dataSource={VisionaryCatelog}
              renderItem={(item) => (
                <List.Item actions={[<Button type="link">Remove</Button>]}>
                  <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                      avatar={<Avatar src={item.preview_image_url} />}
                      title={<a href={`/item/${item.slug}`}>{item.name}</a>}
                      description={formatter.format(item.price_per_day)}
                    />
                  </Skeleton>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
      <Form form={form} layout="vertical" validateMessages={validateMessages}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="First Name"
              name="first_name"
              rules={[
                { required: true, message: 'Please provide your first name' },
              ]}
            >
              <Input placeholder="John" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Last Name"
              name="last_name"
              rules={[
                { required: true, message: 'Please provide your last name' },
              ]}
            >
              <Input placeholder="Smith" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: 'Please provide your email' },
                { type: 'email' },
              ]}
            >
              <Input placeholder="example@email.com" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Phone number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please provide your phone number',
                },
              ]}
            >
              <Input placeholder="XXX-XXX-XXXX" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Location"
              name="location"
              rules={[
                {
                  required: true,
                  message: 'Please select a rental location',
                },
              ]}
            >
              <Select placeholder="Rental Location">
                <Option value="Montreal">Montreal</Option>
                <Option value="Toronto">Toronto</Option>
                <Option value="Ottawa">Ottawa</Option>
                <Option value="Vancouver">Vancouver</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="date"
              label="Rental Date"
              rules={[
                {
                  required: true,
                  message: 'Please select a rental date range',
                },
              ]}
            >
              <RangePicker />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Special request" name="special_request">
              <TextArea
                placeholder="Anything you would like to include on your request (pick up time, additional accessories etc.)"
                autoSize={{ minRows: 2 }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OrderComponent;
