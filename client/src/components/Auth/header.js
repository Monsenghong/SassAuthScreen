import React from 'react'
import styled from 'styled-components'
const HStyle = styled.h1`
backgroundColor: "#FAFAFA",
  width:'100vw',
  height:'33px',
`

const Header = ({headerText,pText}) => {
  return (
    <div>
        <h1>{headerText}</h1>
            <p>{pText}</p>

    </div>
  )
}

export default Header