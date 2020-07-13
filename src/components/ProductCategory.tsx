import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export interface FilterProps {
  current: string;
  onSelect: (key: string) => any;
}

const ProductFilterComponent = ({ current, onSelect }: FilterProps) => {
  return (
    <div>
      <Menu
        onClick={(e) => onSelect(e.key.toString())}
        selectedKeys={[current]}
        mode="horizontal"
        className="mb-30"
      >
        <Menu.Item key="all">Show All Products</Menu.Item>
        <SubMenu title="Photography" key="photography">
          <Menu.Item key="camera:dslr">DSLR Camera</Menu.Item>
          <Menu.Item key="lens:camera">Camera Lens</Menu.Item>
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
    </div>
  );
};

export default ProductFilterComponent;
