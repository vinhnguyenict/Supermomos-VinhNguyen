import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'
import Flex from 'components/Flex'
import Logo from './Logo'
import Menu from './Menu'

const Nav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 99999;
    width: 100%;
    background: ${({ theme }) => theme.colors.black};
`

const Header: React.FC = () => {
    return (
        <Nav>
            <Container>
                <Flex justifyContent="space-between">
                    <Logo />
                    <Menu />
                </Flex>
            </Container>
        </Nav>
    )
}

export default Header
