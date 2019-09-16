import React from 'react'
import styled from 'styled-components'

import LogoSVG from '../svg/LogoSVG'

const LogoStyled = styled.i`
    display: block;
    height: 40px;

    background-image: url('../../../images/logo.png');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;

    cursor: pointer;
`

const Logo = () => (
    <LogoStyled>
        <LogoSVG />
    </LogoStyled>
)

export default Logo