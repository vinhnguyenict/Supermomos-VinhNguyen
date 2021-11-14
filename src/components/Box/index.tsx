import styled from 'styled-components'
import { space, color, layout } from 'styled-system'

export type StyleProps = {
    m?: string | number
    mt?: string | number
    mr?: string | number
    mb?: string | number
    ml?: string | number
    mx?: string | number
    my?: string | number
    p?: string | number
    pt?: string | number
    pr?: string | number
    pb?: string | number
    pl?: string | number
    px?: string | number
    py?: string | number
    textAlign?: string

    width?: string | number
}

const Box = styled('div')<StyleProps>(
    {
        boxSizing: 'border-box',
    },
    space,
    layout,
    color
)

export default Box
