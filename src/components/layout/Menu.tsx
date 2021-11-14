import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0.8rem;
    overflow: hidden;
`

const NavItem = styled.li`
    float: left;
    text-align: center;
    padding: 14px 16px;

    a {
        font-size: ${({ theme }) => theme.fontSizes[3]}px;
        font-weight: 500;
        display: block;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
    }
`

const Menu = () => {
    return (
        <Nav>
            <NavItem>
                <Link to="/#">Blog</Link>
            </NavItem>
            <NavItem>
                <Link to="/#">Socials</Link>
            </NavItem>
            <NavItem>
                <Link to="/#">Contact</Link>
            </NavItem>
        </Nav>
    )
}

export default Menu
