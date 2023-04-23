import React from 'react';
import Social from './social';
import { Row, Col } from 'antd';
const SocialLayout = ({ children }) => {
  return (
    <div >
      <Row style={{ marginTop: '23px', marginLeft: '25px' }} align="middle">
        <Col style={{ width: '80px' }}>{children}</Col>
        <Col style={{ width: '350px' }}>
          <Social />
        </Col>
      </Row>
    </div>
  );
};

export default SocialLayout;
