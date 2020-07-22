import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RentalItem } from '../types/Rental';
import { VisionaryCatelog } from '../data/catelog';
import { Row, Col, Typography, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/configureStore';
import { addToCart } from '../actions/ShoppingCart';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const { Text, Title, Paragraph } = Typography;

const formatter = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'CAD',
});

const ProductPageComponent = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.shoppingCart);
  const inCart = cart.some((item: RentalItem) => item.slug === slug);
  const addToRentalRequest = (item: RentalItem) => {
    setLoading(true);
    dispatch(addToCart(item));
    setLoading(false);
    message.success(t('item_added_to_cart'));
  };

  const rentalItem: RentalItem | undefined = getProductInformationFromSlug(
    slug,
  );
  return (
    <div>
      {rentalItem && (
        <div style={{ paddingTop: '20px' }}>
          <Row className="product-picture-holder">
            <Col sm={24} lg={14} xl={14} className="product-picture-holder">
              <img src={rentalItem.preview_image_url} alt="" />
            </Col>
            <Col sm={24} lg={10} xl={10}>
              <div className="mb-15">
                <Title level={2}>{rentalItem.name}</Title>
                <Title level={4} className="mb-15">
                  {formatter.format(rentalItem.price_per_day)}
                  <Text type="secondary" style={{ marginLeft: '15px' }}>
                    {t('per_day')}
                  </Text>
                </Title>
              </div>
              <div className="mb-15">
                <Button
                  type="primary"
                  block
                  loading={loading}
                  size="large"
                  disabled={inCart}
                  onClick={() => addToRentalRequest(rentalItem)}
                >
                  {inCart ? t('item_is_in_cart') : t('add_to_rental_request')}
                </Button>
              </div>
              <div>
                <Paragraph className="italic mb-15">
                  {t('available_in')}:{' '}
                  {rentalItem.available_locations.join(', ')}
                </Paragraph>
                <Paragraph>{rentalItem.description.full}</Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

function getProductInformationFromSlug(slug: string): RentalItem | undefined {
  return VisionaryCatelog().find((item) => item.slug === slug);
}

export default ProductPageComponent;
