import React from 'react';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';

const { SubMenu } = Menu;

export interface FilterProps {
  current: string;
  onSelect: (key: string) => any;
}

const ProductFilterComponent = ({ current, onSelect }: FilterProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <Menu
        onClick={(e) => onSelect(e.key.toString())}
        selectedKeys={[current]}
        mode="horizontal"
        className="mb-30"
      >
        <Menu.Item key="all">{t('show_all_products')}</Menu.Item>
        <SubMenu title={t('photography')} key="photography">
          <Menu.Item key="camera:dslr">{t('dslr_camera')}</Menu.Item>
          <Menu.Item key="lens:camera">{t('camera_lens')}</Menu.Item>
        </SubMenu>
        <SubMenu title={t('videography')} key="videography">
          <Menu.Item key="camera:camcorder">{t('camcorder')}</Menu.Item>
          <Menu.Item key="lens:camera">{t('camera_lens')}</Menu.Item>
        </SubMenu>
        <SubMenu title={t('audio')} key="audio">
          <Menu.Item key="audio:mic">{t('microphone')}</Menu.Item>
        </SubMenu>
        <SubMenu title={t('lighting')} key="lighting">
          <Menu.Item key="light:studio">{t('studio_flash')}</Menu.Item>
          <Menu.Item key="light:battery">{t('battery_flash')}</Menu.Item>
        </SubMenu>
        <SubMenu title={t('support')} key="support">
          <Menu.Item key="support:tripod">{t('tripod')}</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default ProductFilterComponent;
