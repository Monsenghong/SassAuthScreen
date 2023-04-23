import React, { useContext, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/router';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import { LoginAuth } from '../helpers';

import InputWrapper from '../../../components/Common/forms/TextInputWrapper';
// import Button from '../../../components/Auth/Buttons/authButton';

import Label from '../../../components/Auth/authFormLabel';
// import Input from '../../../components/Common/forms/TextInput';
import SignInLogo from '../../../../public/auth/login.svg'

import {Row,Col} from 'antd'
import Image from 'next/dist/client/image';
import { Button, Form, Input} from 'antd';
import Social from './social';
import Scial from './social';
import SocialLayout from './socialLayout';


  

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
    marginLeft: '25px',
    fontFamily:'SF Pro Rounded',
    fontWeight:"400",
    fontSize:"12px",
    lineHeight:"12px",
    color: '#BDBDBD',
    
}


const SignInn = ()=>{
  const location = useRouter();
  const { firebase, LogIn } = useContext(AuthContext);
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

  /* eslint-enable */

  const handleSubmit = async (values) => {
    fetchInit();
    let email = values.email;
    let password = values.password;

    let authRes = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        fetchFailure(error);
      });

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
                    onFinish={handleSubmit}
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
                              },
                                    
                            ]}
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

                    <div style={{display:'none'}}>
                    <div style={Line}></div>
                    <SocialLayout><p>Login with</p></SocialLayout>
                    </div>
                   </Col>
                   
                  </Row>

                  
              </Col>
      </Row>
    

    </React.Fragment>
  );
}

export default SignInn

































// import React, { useContext, useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { Formik } from 'formik';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// import AuthContext from '../../../utils/authContext';
// import ApiContext from '../../../utils/apiContext';
// import { LoginAuth } from '../helpers';
// import { colors } from '../../../styles/theme';

// import SEO from '../../../components/Marketing/Layout/seo';
// import ErrorText from '../../../components/Common/errorText';
// import InputWrapper from '../../../components/Common/forms/TextInputWrapper';
// import Button from '../../../components/Auth/Buttons/authButton';
// import Label from '../../../components/Auth/authFormLabel';
// import Input from '../../../components/Common/forms/TextInput';
// import ContinueWith from '../../../components/Auth/continueWith';
// import GoogleButton from '../../../components/Auth/Buttons/googleButton';
// import LoadingOverlay from '../../../components/Common/loadingOverlay';
// import LoginFormHeader from './loginFormHeader';
// import AuthCard from '../../../components/Auth/authCard';

// const ForgotPasswordWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-top: 0.3rem;
//   padding-bottom: 0.3rem;
// `;

// const ForgotPassword = styled.div`
//   text-decoration: underline;
//   color: blue;
//   font-size: 0.875rem;
//   font-weight: 500;
//   cursor: pointer;
// `;

// const RememberMeWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const RememberMeLabel = styled.label`
//   margin-left: 0.1rem;
//   font-size: 0.925rem;
//   color: ${colors.coolGray900};
// `;

// const StyledLink = styled.a`
//   color: ${colors.royalBlue};
// `;

// const Login = () => {
//   const location = useRouter();
//   const { firebase, LogIn } = useContext(AuthContext);
//   const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
//   const { isLoading } = apiState;
//   const [invite_key, setInviteKey] = useState();
//   const [isInviteFlow, setInviteFlow] = useState();

//   /* eslint-disable */
//   //extract data from query params
//   useEffect(() => {
//     if (!location.isReady) return;
//     setInviteFlow(location.query.isInviteFlow);
//     setInviteKey(location.query.verify_key);
//   }, [location.isReady]);

//   useEffect(() => {
//     return () => fetchSuccess();
//   }, []);

//   /* eslint-enable */

//   const handleSubmit = async (values) => {
//     fetchInit();
//     let email = values.email;
//     let password = values.password;

//     let authRes = await firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch((error) => {
//         fetchFailure(error);
//       });

//     LoginAuth(authRes, LogIn, firebase, fetchFailure, isInviteFlow, invite_key, location);
//   };

//   //Google OAuth2 Signin
//   const GoogleSignin = async () => {
//     fetchInit();
//     let provider = new firebase.auth.GoogleAuthProvider();

//     let authRes = await firebase
//       .auth()
//       .signInWithPopup(provider)
//       .catch((error) => {
//         fetchFailure(error);
//       });

//     LoginAuth(authRes, LogIn, firebase, fetchFailure, isInviteFlow, invite_key, location);
//   };

//   const seoData = {
//     title: 'Saas Starter Kit Pro Login Page',
//     description: 'Saas Starter Kit Pro Login Page'
//   };

//   return (
//     <React.Fragment>
//       <SEO seoData={seoData} />
//       <div>
//         {isLoading && <LoadingOverlay />}
//         <LoginFormHeader />
//         <AuthCard>
//           <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
//             {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
//               <form onSubmit={handleSubmit}>
//                 <Label htmlFor="email">Email:</Label>
//                 <InputWrapper>
//                   <Input
//                     type="email"
//                     name="email"
//                     id="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                   />
//                 </InputWrapper>
//                 {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
//                 <Label htmlFor="password">Password:</Label>
//                 <InputWrapper>
//                   <Input
//                     type="password"
//                     name="password"
//                     id="password"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.password}
//                   />
//                 </InputWrapper>
//                 {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}

//                 <Button type="submit">Signin</Button>
//               </form>
//             )}
//           </Formik>
//           <ForgotPasswordWrapper>
//             <RememberMeWrapper>
//               <input id="remember_me" name="remember_me" type="checkbox" />
//               <RememberMeLabel htmlFor="remember_me">Remember me</RememberMeLabel>
//             </RememberMeWrapper>

//             <ForgotPassword>
//               <Link href="/auth/passwordreset" passHref>
//                 <StyledLink>Forgot your password?</StyledLink>
//               </Link>
//             </ForgotPassword>
//           </ForgotPasswordWrapper>

//           <ContinueWith />
//           <GoogleButton GoogleSignin={GoogleSignin} />
//         </AuthCard>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Login;
