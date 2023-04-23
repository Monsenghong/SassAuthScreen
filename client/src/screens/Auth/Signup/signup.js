import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import { ValidSchema, SignupAuth } from '../helpers';

import SEO from '../../../components/Marketing/Layout/seo';
import Button from '../../../components/Auth/Buttons/authButton';
import LoadingOverlay from '../../../components/Common/loadingOverlay';
import SignUpFormHeader from './signupFormHeader';
import AuthLayout from '../../../components/Auth/AuthLayout';
import SignUpLogo from '../../../../public/auth/register.svg';
import SignUpHeader from '../../../components/Auth/header';
import Link from 'next/dist/client/link';
import { Row, Col } from 'antd';
import Image from 'next/dist/client/image';
import { Form, Input } from 'antd';
// TODO: replace with actual data
const getData = () => ({
  site: {
    siteMetadata: {
      siteUrl: 'http://localhost:3000'
    }
  }
});

const InputStyle = { height: '50px', borderRadius: '8px' };

const SignUpBtn = {
  width: '146px',
  height: ' 44px'
};

const Signup = () => {
  const location = useRouter();
  const data = getData();
  const domainUrl = data.site.siteMetadata.siteUrl;
  const { firebase } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  const [invite_key, setInviteKey] = useState();
  const [isInviteFlow, setInviteFlow] = useState();

  /* eslint-disable */
  //extract data from query params
  useEffect(() => {
    if (!location.isReady) return;
    setInviteFlow(location.query.isInviteFlow);
    setInviteKey(location.query.verify_key);
  }, [location.isReady]);

  useEffect(() => {
    return () => fetchSuccess();
  }, []);
  /* eslint-disable */

  const handleSubmit = async (values) => {
    fetchInit();

    let email = values.email;
    let password = values.password;
    let username = values.username;

    let authRes = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        fetchFailure(error);
      });

    SignupAuth(
      authRes,
      firebase,
      fetchFailure,
      username,
      domainUrl,
      isInviteFlow,
      invite_key,
      location
    );
  };

  //Google OAuth2 Signin
  const GoogleSignin = async () => {
    fetchInit();
    let provider = new firebase.auth.GoogleAuthProvider();

    //wait for firebase to confirm signup
    let authRes = await firebase
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        fetchFailure(error);
      });

    SignupAuth(
      authRes,
      firebase,
      fetchFailure,
      null,
      domainUrl,
      isInviteFlow,
      invite_key,
      location
    );
  };

  const seoData = {
    title: 'Saas Starter Kit Pro Sign up Page',
    description: 'Saas Starter Kit Pro Sign up Page'
  };

  return (
    <React.Fragment>
      <SEO seoData={seoData} />
      <div>
        {isLoading && <LoadingOverlay />}

        <AuthLayout
          navText={'Already have an account?'}
          imgUrl={SignUpLogo}
          authBtn={<Link href="/auth/login">Login</Link>}
          header={<SignUpHeader headerText={'Welcome to Propel'} pText={'Register your account'} />}
        >
          <Form
            onFinish={handleSubmit}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: '800px', marginTop: '22px' }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Username" style={InputStyle} />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },

                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                }
              ]}
            >
              <Input placeholder="Email" style={InputStyle} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" style={InputStyle} />
            </Form.Item>
            <Row justify="end">
              <Form.Item>
                <Button type="primary" htmlType="submit" style={SignUpBtn}>
                  Sign Up
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </AuthLayout>
      </div>
    </React.Fragment>
  );
};

export default Signup;
