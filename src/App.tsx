import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Button, Tooltip } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import './App.css';
import ShopComponent from './components/Shop';
import OrderComponent from './components/Order';
import ChatComponent from './components/Chat';

const { Header, Content, Footer } = Layout;

function App() {
  const [selectedMenu] = useState(window.location.pathname);
  return (
    <Router>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[selectedMenu]}
        >
          <Menu.Item key="/">
            <Link to="/">Rental Store</Link>
          </Menu.Item>
          <Menu.Item key="/order">
            <Link to="/order">Your Order</Link>
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
            <Route path="/">
              <ShopComponent />
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Crafted by Yong Lin Wang</Footer>
      <div className="contact-us-container">
        <Tooltip placement="left" title="Got a question? Contact us now!">
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
  );
}

export default App;
