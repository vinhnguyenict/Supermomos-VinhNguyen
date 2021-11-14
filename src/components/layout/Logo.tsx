import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Img = styled.img`
    height: 100%;
`

const Logo = () => {
    return (
        <Link to="/">
            <Img src="/images/logo.png" />
        </Link>
    )
}

export default Logo
