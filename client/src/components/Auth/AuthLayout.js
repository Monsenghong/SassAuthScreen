
import SignInLogo from '../../../public/auth/register.svg'

import {Row,Col} from 'antd'

import Image from 'next/dist/client/image';



  

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


const SignUpLink = {
    width: "67px",
  height: "25px",
  marginLeft: '18px',
  textAlign: 'center',
  /* White */
//   background: "#FFFFFF",
  /* Gray 3 */
 
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

const LinkStyle = {
        
    width: '99px',
    height:'18px',
    fontFamily:'SF Pro Rounded',
    fontWeight:"400",
    fontSize:"15px",
    lineHeight:"12px",
    color: "#828282",
    marginTop:'188px'
   
}

const AuthLayout = ({children,imgUrl,authBtn,header,navText,backToLoginBtn}) => {
  return (
    <div>
         <Row style={container} >
              <Col  style={Left} xs={0} sm={0} md={12} xl={12} xxl={12}>
                  <Row style={LeftRow} align='middle' justify='center'>
                  <Col ><Image src={imgUrl}/></Col>
                  </Row>
             </Col>

              <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
                  <Row style={RightRow}>

                    <Col style={Header}>
                       <Row justify='end'>
                                       <p>{navText}</p> <div style={SignUpLink}>{authBtn}</div>
                       </Row></Col>
                    <Col style={SecHeader}> {header}
                    {children}
                  
                   </Col>
                   <Col style={LinkStyle} >{backToLoginBtn}</Col>
                   
                  </Row>

                  
              </Col>
      </Row>
    </div>
  )
}

export default AuthLayout