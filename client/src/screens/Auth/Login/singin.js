import React, { useContext, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/router';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';

import InputWrapper from '../../../components/Common/forms/TextInputWrapper';
// import Button from '../../../components/Auth/Buttons/authButton';

import Label from '../../../components/Auth/authFormLabel';
// import Input from '../../../components/Common/forms/TextInput';
import SignInLogo from '../../../../public/auth/login.svg'

import {Row,Col} from 'antd'
import Image from 'next/dist/client/image';
import { Button, Form, Input} from 'antd';
import Social from './social';
import SocialLayout from './socialLayout';
import { ValidSchema } from '../helpers';


  

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

const SignInBtn = {
  width:"146px",
height:" 44px",
marginTop:'50px',


/* Blue 1 */
background:" #2F80ED",
borderRadius:" 8px",
}


const Line = {
width:'100%',
height:" 1px",
marginTop:'25px',


/* Gray 5 */
background:" #E0E0E0"

}

const ForgetStyle = {
        
    width: '99px',
   
    fontFamily:'SF Pro Rounded',
    fontWeight:"400",
    fontSize:"12px",
    lineHeight:"12px",
    color: '#BDBDBD',
    
}


const SignInn = ()=>{
  return (
    <React.Fragment>
      
      <Row style={container} >
              <Col  style={Left} xs={0} sm={0} md={12} xl={12} xxl={12}>
                  <Row style={LeftRow} align='middle' justify='center'>
                  <Col ><Image src={SignInLogo}/></Col>
                  </Row>
             </Col>

              <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
                  <Row style={RightRow}>

                    <Col style={Header}>
                       <Row justify='end'>
                                       <p>Don't have an account?</p> <a href='/auth/signup' style={ButtonStyle}>Sign Up</a>
                       </Row></Col>
                    <Col style={SecHeader}> <h1>Welcome Back</h1>
                    <p>Register your account</p>
                    
                    <Form
                   
                    
              
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: '800px', marginTop:'22px', }}>
          
                          <Form.Item
                            name="email"
                            rules={[
                              
                            { required: true, message: 'Please input your email!' },

                            {
                              type: 'email',
                              message: 'The input is not valid E-mail!',
                            },]}
                          >
                            <Input placeholder='Username' style={InputStyle}/>
                          </Form.Item>

                          <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                          >
                            <Input.Password placeholder='Password' style={InputStyle}/>
                          </Form.Item>

                          <a href="/auth/passwordreset" style={ForgetStyle}>Forgot password?</a>
                          <Row justify='end'>
                          <Form.Item >
                          <Button type="primary" htmlType="submit" style={SignInBtn}>
                          Sign In
                          </Button>
                          </Form.Item>
                          </Row>
                                          </Form>
                    <div style={Line}></div>
                  
            
                   
                  
                  </Col>
                   
        
                  </Row>

                  
              </Col>
      </Row>
 

    </React.Fragment>
  );
}

export default SignInn