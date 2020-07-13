import React, { useState } from 'react';
import { Menu, Card, Col, Row, Input } from 'antd';
import { VisionaryCatelog } from '../data/catelog';

const { SubMenu } = Menu;
const { Meta } = Card;
const { Search } = Input;

const ShopComponent = () => {
  const [current, setCurrent] = useState('all');
  return (
    <div className="store-wrapper">
      <Menu
        onClick={(e) => setCurrent(e.key.toString())}
        selectedKeys={[current]}
        mode="horizontal"
        className="mb-30"
      >
        <Menu.Item key="all">Show All Products</Menu.Item>
        <SubMenu title="Photography" key="photography">
          <Menu.ItemGroup title="Camera">
            <Menu.Item key="camera:dslr">DSLR Camera</Menu.Item>
            <Menu.Item key="camera:mirrorless">Mirrorless Camera</Menu.Item>
            <Menu.Item key="camera:action">Action Camera</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Lens">
            <Menu.Item key="lens:camera">Camera Lens</Menu.Item>
            <Menu.Item key="lens:full">Full-frame Lens</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu title="Videography" key="videography">
          <Menu.Item key="camera:camcorder">Camcorder</Menu.Item>
          <Menu.Item key="lens:camera">Camera Lens</Menu.Item>
        </SubMenu>
        <SubMenu title="Audio" key="audio">
          <Menu.Item key="audio:mic">Microphone</Menu.Item>
          <Menu.Item key="audio:mixer">Mixers</Menu.Item>
        </SubMenu>
        <SubMenu title="Lighting" key="lighting">
          <Menu.Item key="light:studio">Studio Flash</Menu.Item>
          <Menu.Item key="light:battery">Battery Flash</Menu.Item>
        </SubMenu>
        <SubMenu title="Support" key="support">
          <Menu.Item key="support:tripod">Tripod</Menu.Item>
        </SubMenu>
      </Menu>
      <Search
        className="mb-30"
        placeholder="Search through our large catelog here"
        enterButton="Search"
        size="large"
        onSearch={(value) => console.log(value)}
      />
      <Row gutter={[16, 16]}>
        {VisionaryCatelog.map((item) => (
          <Col xs={24} sm={12} md={8} lg={8} xl={4} key={item.name}>
            <Card
              hoverable
              cover={
                item.preview_image_url && (
                  <img alt={item.name} src={item.preview_image_url} />
                )
              }
            >
              <Meta
                title={item.name}
                description={`${
                  item.description.short
                } Available in ${item.available_locations.join(', ')}`}
                className="mb-15"
              />
              <Meta title={`$${item.price_per_day.toFixed(2)}/day`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ShopComponent;
