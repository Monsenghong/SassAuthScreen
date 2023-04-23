import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthLayout from '../../../components/Auth/AuthLayout';
import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import LoadingOverlay from '../../../components/Common/loadingOverlay';
import ResetFormHeader from './resetFormHeader';
import ResetSuccess from './resetSuccessMessage';
import InputWrapper from '../../../components/Common/forms/TextInputWrapper';
import Button from '../../../components/Auth/Buttons/authButton';
import RestPasswordLogo from '../../../../public/auth/forgetpassword.svg';
import { colors } from '../../../styles/theme';
import { Row, Col } from 'antd';
import Image from 'next/dist/client/image';
import { Form, Input } from 'antd';
import Link from 'next/link';
import ResetHeader from '../../../components/Auth/header';


const InputStyle = { height: '50px', borderRadius: '8px' };


const ResetPassword = () => {
  const { firebase } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values) => {
    console.log('Submited');

    fetchInit();

    let email = values.email;
    console.log('email:' + email);
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .catch((err) => {
        fetchFailure(err);
      });

    setSuccess(true);
    fetchSuccess();
  };

  const seoData = {
    title: 'Saas Starter Kit Pro Reset Password Page',
    description: 'Saas Starter Kit Pro Reset Password Page'
  };

  return (
    <React.Fragment>
      {isLoading && <LoadingOverlay />}
      {!success ? (
        <div>
         
          <AuthLayout 
          backToLoginBtn={<Link href='/auth/login'>Back to login</Link>}
          header={<ResetHeader headerText={'Forgot your password?'} pText={'Enter your email address to recover your password'} />}
          imgUrl={RestPasswordLogo}>
            <Form
              initialValues={{
                remember: true
              }}
              onFinish={handleSubmit}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              style={{ maxWidth: '800px', marginTop: '22px' }}
            >
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
                <Input placeholder="email" style={InputStyle} />
              </Form.Item>

              <Row justify="end">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </AuthLayout>
      
        </div>
      ) : (
        <ResetSuccess />
      )}
    </React.Fragment>
  );
};

export default ResetPassword;
