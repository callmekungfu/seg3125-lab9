import React, { useState } from 'react';
import { Card, Col, Row, Input, Tag, Empty } from 'antd';
import { VisionaryCatelog } from '../data/catelog';
import { useSelector } from 'react-redux';
import { AppState } from '../store/configureStore';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import ProductFilterComponent from './ProductCategory';
import { RentalItem } from '../types/Rental';
import { useTranslation } from 'react-i18next';

const { Meta } = Card;
const { Search } = Input;

const applyFilter = (category: string, filter: string, item: RentalItem) => {
  if (category === 'all') {
    return item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
  }
  return (
    item.category.includes(category) &&
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
};

const ShopComponent = () => {
  const [current, setCurrent] = useState('all');
  const [search, setSearch] = useState('');
  const { t } = useTranslation();
  const cart = useSelector((state: AppState) => state.shoppingCart);
  const catelogToShow = VisionaryCatelog.filter((item) =>
    applyFilter(current, search, item),
  );
  return (
    <div className="store-wrapper">
      <ProductFilterComponent
        current={current}
        onSelect={(e: string) => setCurrent(e)}
      />
      <Search
        className="mb-30"
        placeholder={t('search_placeholder')}
        enterButton={t('search')}
        size="large"
        onSearch={(value) => setSearch(value)}
      />
      <Row gutter={[16, 16]}>
        {catelogToShow.map((item) => (
          <Col xs={24} sm={12} md={8} lg={8} xl={6} xxl={4} key={item.name}>
            <Link to={`/product/${item.slug}`}>
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
                  description={`${item.description.short} ${t('available_in')}
                    ${item.available_locations.join(', ')}`}
                  className="mb-15"
                />
                <Meta
                  title={`$${item.price_per_day.toFixed(2)}/${t('day')}`}
                  className="mb-15"
                />
                {cart.some((i) => i.id === item.id) && (
                  <Tag icon={<CheckCircleOutlined />} color="success">
                    In Cart
                  </Tag>
                )}
              </Card>
            </Link>
          </Col>
        ))}
        {catelogToShow.length === 0 && (
          <Col span={24}>
            <Empty description={t('no_product_available')} />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ShopComponent;
