import styled from 'styled-components'
import Box from './Box'
import Text from './Text'

const Loader = styled(Box)`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const PageLoader = () => {
    return (
        <Loader>
            <Text fontSize={2} textAlign="center">
                Loading...
            </Text>
        </Loader>
    )
}

export default PageLoader
