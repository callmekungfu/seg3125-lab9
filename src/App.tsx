import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Button, Tooltip, Select } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import { Provider } from 'react-redux';
import './App.css';
import ShopComponent from './components/Shop';
import OrderComponent from './components/Order';
import ChatComponent from './components/Chat';
import { store } from './store/configureStore';
import ProductPageComponent from './components/ProductPage';
import { useTranslation } from 'react-i18next';

const { Header, Content, Footer } = Layout;
const { Option } = Select;

function App() {
  const [selectedMenu] = useState(window.location.pathname);
  const { t, i18n } = useTranslation();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    i18n.changeLanguage(value);
  };
  return (
    <Provider store={store}>
      <Router>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
          >
            <Menu.Item key="/">
              <Link to="/">{t('rental_store')}</Link>
            </Menu.Item>
            <Menu.Item key="/order">
              <Link to="/order">{t('your_order')}</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className="site-layout-content">
            <Switch>
              <Route path="/order">
                <OrderComponent />
              </Route>
              <Route path="/chat">
                <ChatComponent />
              </Route>
              <Route path="/product/:slug">
                <ProductPageComponent />
              </Route>
              <Route path="/">
                <ShopComponent />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <div className="mb-15">{t('signature')}</div>
          <Select
            style={{ width: '120px' }}
            defaultValue={i18n.language.substr(0, 2)}
            onChange={handleChange}
          >
            <Option value="en">English</Option>
            <Option value="fr">Français</Option>
            <Option value="cn">中文</Option>
          </Select>
        </Footer>
        <div className="contact-us-container">
          <Tooltip placement="left" title={t('contact_us_prompt')}>
            <Link to="/chat">
              <Button
                type="primary"
                shape="circle"
                title="contact us"
                icon={<QuestionOutlined />}
                size="large"
              />
            </Link>
          </Tooltip>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
