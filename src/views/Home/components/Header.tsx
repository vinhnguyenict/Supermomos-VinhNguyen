import styled from 'styled-components'
import Text from 'components/Text'
import Box from 'components/Box'

const StyledHeader = styled(Box)`
    padding: 5px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border}; ;
`

interface PropsType {
    title: string
}

const Header = (props: PropsType) => {
    const { title } = props
    return (
        <StyledHeader>
            <Text textAlign="center" fontWeight="bold" fontSize={3}>
                {title}
            </Text>
        </StyledHeader>
    )
}

export default Header
