import React, { useContext, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import ErrorText from '../../../components/Common/errorText';
import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import { LoginAuth, ValidSchema } from '../helpers';
import Button from '../../../components/Auth/Buttons/authButton';
import LoginHeader from '../../../components/Auth/header';
import SignInLogo from '../../../../public/auth/login.svg';
import AuthLayout from '../../../components/Auth/AuthLayout';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import LoadingOverlay from '../../../components/Common/loadingOverlay';
import Image from 'next/dist/client/image';
import { Form, Input,notification } from 'antd';
import Link from 'next/link';
import Social from './social';
import Scial from './social';
import SocialLayout from './socialLayout';
import { colors } from '../../../styles/theme';


const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`;
const StyledLink = styled.a`
  color: ${colors.royalBlue};
`;

const ForgotPassword = styled.div`
  text-decoration: none;
  color: blue;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
`;

const seoData = {
  title: 'Saas Starter Kit Pro Sign up Page',
  description: 'Saas Starter Kit Pro Sign up Page'
};

const InputStyle = { height: '50px', borderRadius: '8px' };


const ForgetStyle = {
  width: '99px',
  marginLeft: '25px',
  fontFamily: 'SF Pro Rounded',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '12px',
  color: colors.royalBlue,
};

const SignInn = () => {
  const location = useRouter();
  const { firebase, LogIn } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);

  const { isLoading} = apiState;
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

  /* eslint-enable */
  
  const handleSubmit = async (values) => {
    fetchInit();
    let email = values.email;
    let password = values.password;
   
    let authRes = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {

     
        //fetchFailure(error);
        fetchSuccess()
        notification.error({
        message: error.name,
        description: error.message,
        });
      });

    if (!authRes) {
      
    
      return;
    }
  
    LoginAuth(authRes, LogIn, firebase, fetchFailure, isInviteFlow, invite_key, location);
  };
  
  //Google OAuth2 Signin
  const GoogleSignin = async () => {
    fetchInit();
    let provider = new firebase.auth.GoogleAuthProvider();

    let authRes = await firebase
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        fetchFailure(error);
      });

    LoginAuth(authRes, LogIn, firebase, fetchFailure, isInviteFlow, invite_key, location);
  };



  return (
    <React.Fragment>
     <div>
        {isLoading && <LoadingOverlay />}
      <AuthLayout
        navText={'Don’t you have an account?'}
        imgUrl={SignInLogo}
        authBtn={<Link href="/auth/signup">Sign Up</Link>}
        header={<LoginHeader headerText={'Welcome Back'} pText={'Login your account'} />}
      >
        
        <Form
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
                message: 'Email is not valid !'
              }
              
            ]}
          >
            <Input placeholder="Username" style={InputStyle} />
          </Form.Item>

          <Form.Item
            name="password"
            
          
            rules={[
              { required: true, message: 'Please input your password!',
                
            }
            
           
         ]}
          >
            <Input.Password placeholder="Password" style={InputStyle} />
            
          </Form.Item>

          <Link href="/auth/passwordreset" style={ForgetStyle}>
            Forgot password?
          </Link>
          <Row justify="end">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
          </Row>
        </Form>
       
       
        {/* <ForgotPasswordWrapper>
         

        <RememberMeWrapper>
              <input id="remember_me" name="remember_me" type="checkbox" />
              <RememberMeLabel htmlFor="remember_me">Remember me</RememberMeLabel>
            </RememberMeWrapper> 

        <ForgotPassword>
              <Link href="/auth/passwordreset" passHref>
                <StyledLink>Forgot your password?</StyledLink>
              </Link>
            </ForgotPassword>
         </ForgotPasswordWrapper>

         <ContinueWith />
          <GoogleButton GoogleSignin={GoogleSignin} /> */}
      </AuthLayout>

      </div>
    </React.Fragment>
  );
};

export default SignInn;





