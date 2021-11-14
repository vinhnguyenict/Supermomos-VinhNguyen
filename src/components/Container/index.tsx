import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.75em;
    padding-right: 0.75em;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        max-width: 540px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 720px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: 960px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        max-width: 1140px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
        max-width: 1320px;
    }
`

export default Container
