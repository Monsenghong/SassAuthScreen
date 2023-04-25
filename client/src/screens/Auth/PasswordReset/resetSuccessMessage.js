import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../styles/theme';
import { Result,Button} from 'antd'
import { colors } from '../../../styles/theme';
import Link from 'next/dist/client/link';
// import {Button} from '../../../components/Auth/Buttons/authButton'


const LinkStyle = styled.button`

  padding: 0.5rem 1rem;
  font-weight: 500;
  width: 146px;
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.indigo600};
  border: 1px solid transparent;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: ${colors.indigo500};
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(164, 202, 254, 0.45);
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  &:active {
    background-color: ${colors.indigo600};
  }
`;

const Wrapper = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakpoints.small}) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 28rem;
  }
`;


const CenterIcon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100vw;
height:100vh;`

const Title = styled.h2`
  padding-right: 2rem;
  padding-left: 2rem;
  color: green;
  text-align: center;
  font-weight: 400;
  font-size: 1.5rem;
`;

const ButtonStyle = {borderRadius:"0.375rem",}

const ResetSuccess = () => (


<>

<CenterIcon>
 
  <Result
    status="success"
    title="A reset link has been sent to your Email"
  //  extra={[

  //   <Button type="primary" style={ButtonStyle}>
  //       <Link href='/auth/login' >Back to login</Link>
  //     </Button>,

  //  ]}
  />

 <LinkStyle as="a" href="/auth/login" >Back to login</LinkStyle>

 {/* <LinkStyle ><Link style={{color:colors.white}} href="/auth/login" >Back</Link></LinkStyle> */}
  </CenterIcon>
  

 </>
);

export default ResetSuccess;
