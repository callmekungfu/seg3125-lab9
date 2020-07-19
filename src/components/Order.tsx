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
  Tooltip,
  message,
} from 'antd';
import { AppState } from '../store/configureStore';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../actions/ShoppingCart';
import { useTranslation } from 'react-i18next';

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

const inputGridSetup = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 8,
};

const OrderComponent = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.shoppingCart);
  const { t } = useTranslation();
  const onFinish = () => {
    message.success('Request sent!');
    form.resetFields();
    dispatch(clearCart());
  };
  return (
    <div>
      <Title level={2}>{t('rental_request_form')}</Title>
      <p>{t('rental_prompt')}</p>
      <Row gutter={[30, 30]}>
        <Col span={24}>
          <Card title={t('shopping_cart')}>
            <List
              className="demo-loadmore-list"
              itemLayout="horizontal"
              dataSource={cart}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button
                      type="link"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </Button>,
                  ]}
                >
                  <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                      avatar={<Avatar src={item.preview_image_url} />}
                      title={<a href={`/product/${item.slug}`}>{item.name}</a>}
                      description={formatter.format(item.price_per_day)}
                    />
                  </Skeleton>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
      <Form
        form={form}
        layout="vertical"
        validateMessages={validateMessages}
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col {...inputGridSetup}>
            <Form.Item
              label={t('first_name')}
              name="first_name"
              rules={[{ required: true, message: t('first_name_error') }]}
            >
              <Input placeholder="John" />
            </Form.Item>
          </Col>
          <Col {...inputGridSetup}>
            <Form.Item
              label={t('last_name')}
              name="last_name"
              rules={[{ required: true, message: t('last_name_error') }]}
            >
              <Input placeholder="Smith" />
            </Form.Item>
          </Col>
          <Col {...inputGridSetup}>
            <Form.Item
              label={t('email_address')}
              name="email"
              rules={[
                { required: true, message: 'Please provide your email' },
                { type: 'email' },
              ]}
            >
              <Input placeholder="example@email.com" />
            </Form.Item>
          </Col>
          <Col {...inputGridSetup}>
            <Form.Item
              label={t('phone_number')}
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
          <Col {...inputGridSetup}>
            <Form.Item
              label={t('location')}
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
          <Col {...inputGridSetup}>
            <Form.Item
              name="date"
              label={t('rental_date')}
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
            <Form.Item label={t('special_request')} name="special_request">
              <TextArea
                placeholder={t('special_request_placeholder')}
                autoSize={{ minRows: 2 }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          {!cart || cart.length === 0 ? (
            <Tooltip title="You cannot submit a request without any items.">
              <Button type="primary" htmlType="submit" block disabled>
                {t('submit')}
              </Button>
            </Tooltip>
          ) : (
            <Button type="primary" htmlType="submit" block>
              {t('submit')}
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default OrderComponent;
