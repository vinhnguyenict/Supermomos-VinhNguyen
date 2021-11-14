import styled from 'styled-components'

type StyleProps = {
    height: string
}

const Avatar = styled.img<StyleProps>`
    height: ${({ height }) => height};
    vertical-align: middle;
    border-radius: 9999px;
`

export default Avatar
