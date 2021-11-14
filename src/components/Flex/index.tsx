import styled from 'styled-components'
import { space, color, flexbox } from 'styled-system'

type StyleProps = {
    alignItems?: string
    alignContent?: string
    justifyContent?: string
    flexWrap?: string
    alignSelf?: string
}

const Flex = styled.section<StyleProps>(
    {
        display: 'flex',
        boxSizing: 'border-box',
        minWidth: 0,
    },
    space,
    color,
    flexbox
)
export default Flex
