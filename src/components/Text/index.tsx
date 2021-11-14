import styled from 'styled-components'
import { typography, color } from 'styled-system'

type StyleProps = {
    fontSize?: number
    fontFamily?: string
    textAlign?: string | string[]
    lineHeight?: string
    fontWeight?: string
    letterSpacing?: string
}
const Text = styled.div<StyleProps>`
    ${typography};
    ${color}
`

export default Text
