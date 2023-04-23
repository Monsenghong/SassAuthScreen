import React from 'react';
import Image from 'next/image';
import Facebook from '../../../../public/social/facebook.svg';
import Linkin from '../../../../public/social/linkin.svg';
import Twitter from '../../../../public/social/twitter.svg';
import Google from '../../../../public/social/google.svg';
import { Col, Space, Row } from 'antd';
const style = {
  background: '#0092ff'
};

const Scial = () => {
  return (
    <>
      
      <Col>
         <Row align="middle"  > {/*style={{ marginTop: '23px', marginLeft:'25px'  }} */}
          
          <Col xs={24} sm={3} md={4} xl={4} xxl={5} className="gutter-row">
            <Row justify="center">
              <Col>
                <a>
                  <Image src={Facebook} />
                </a>
              </Col>
            </Row>
          </Col>

          <Col xs={24} sm={3} md={4} xl={4} xxl={5} className="gutter-row">
            <Row justify="center">
              <Col>
                <a>
                  <Image src={Google} />
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={3} md={4} xl={4} xxl={5} className="gutter-row">
            <Row justify="center">
              <Col>
                <a>
                  <Image src={Twitter} />
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={3} md={4} xl={4} xxl={5} className="gutter-row">
            <Row justify="center">
              <Col>
                <a>
                  <Image src={Linkin} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
   
    </>
  );
};

export default Scial;
