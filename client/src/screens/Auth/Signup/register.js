import React, { useContext, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/router';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import { ValidSchema, SignupAuth } from '../helpers';

import SEO from '../../../components/Marketing/Layout/seo';
import ErrorText from '../../../components/Common/errorText';
import InputWrapper from '../../../components/Common/forms/TextInputWrapper';
// import Button from '../../../components/Auth/Buttons/authButton';
import AuthCard from '../../../components/Auth/authCard';
import Label from '../../../components/Auth/authFormLabel';
// import Input from '../../../components/Common/forms/TextInput';
import ContinueWith from '../../../components/Auth/continueWith';
import GoogleButton from '../../../components/Auth/Buttons/googleButton';
import LoadingOverlay from '../../../components/Common/loadingOverlay';
import SignUpFormHeader from './signupFormHeader';
import SignUpLogo from '../../../../public/auth/register.svg'

import {Row,Col} from 'antd'
import Image from 'next/dist/client/image';
import { Button, Form, Input} from 'antd';
import SocialLayout from '../Login/socialLayout';

// TODO: replace with actual data
const getData = () => ({
  site: {
    siteMetadata: {
      siteUrl: 'http://localhost:3000'
    }
  }
});

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
  const container = {
    
    height: '100vh',
    width: '100vw',
  

  }

const Left = {
  width:'100vw',
  height:'100vh',
  backgroundColor:'rgba(0, 159, 255, 0.05)',
}

const LeftRow = {
  height: '100vh',


}

const RightRow = {
  height: '100vh',
  padding:'55px 69px 39px',
  backgroundColor:'#FAFAFA',


}

const Header = {
  
   width:'100vw',
  
}

const SecHeader = {
  backgroundColor: "#FAFAFA",
  width:'100vw',
 
  // marginTop: '67px',
}

const ButtonStyle = {
  width: "67px",
height: "25px",
marginLeft: '18px',
textAlign: 'center',
color: "#828282",
/* White */
background: "#FFFFFF",
/* Gray 3 */
border: "0.5px solid #828282",
borderRadius:" 6px"
}


const InputStyle = {height:'50px',borderRadius:'8px',}

const SignUpBtn = {
  width:"146px",
height:" 44px",


/* Blue 1 */
background:" #2F80ED",
borderRadius:" 8px",
}


const Line = {
width:'100%',
height:" 1px",


/* Gray 5 */
background:" #E0E0E0"

}

  return (
    <React.Fragment>

      <Row style={container} >
              <Col  style={Left} xs={0} sm={0} md={12} xl={12} xxl={12}>
                  <Row style={LeftRow} align='middle' justify='center'>
                  <Col ><Image src={SignUpLogo}/></Col>
                  </Row>
             </Col>

              <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
                  <Row style={RightRow}>

                    <Col style={Header}>
                       <Row justify='end'>
                                       <p>Already have an account?</p> <a href='/' style={ButtonStyle}>Sign In</a>
                       </Row></Col>
                    <Col style={SecHeader}> <h1>Welcome to Propel</h1>
                    <p>Register your account</p>
                    
                    <Form
                    onFinish={handleSubmit}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: '800px', marginTop:'22px', }}
                    
                    > 
                          <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                          >
                            <Input placeholder='Username' style={InputStyle}/>
                          </Form.Item>

                          <Form.Item
                            name="email"
                            rules={[
                            { required: true, message: 'Please input your email!' },

                            {
                              type: 'email',
                              message: 'The input is not valid E-mail!',
                            },
                                  
                          ]}
                          >
                            <Input placeholder='Email' style={InputStyle}/>
                           
                          </Form.Item>

                          <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                          >
                            <Input.Password placeholder='Password' style={InputStyle}/>
                          </Form.Item>
                          <Row justify='end'>
                          <Form.Item >
                          <Button type="primary" htmlType="submit" style={SignUpBtn}>
                            Sign Up
                          </Button>
                          </Form.Item>
                          </Row>
                                    </Form>
              
                    <div style={{display:'none'}}>
                    <div style={Line}></div>
                    <SocialLayout><p>Signup with</p></SocialLayout>
                    </div>
                  </Col>
                   
          
        
                  </Row>

                  
              </Col>
      </Row>
 

    </React.Fragment>
  );
};

export default Signup;
