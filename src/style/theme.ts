const theme = {
    colors: {
        black: '#000',
        white: '#fff',
        text: '#fff',
        background: '#060606',
        primary: '#3cf',
        secondary: '#e0f',
        muted: '#191919',
        highlight: '#29112c',
        gray: '#999',
        purple: '#c0f',
        border: '#D3D3D3',
        blue: '#26619c',
    },
    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    breakpoints: {
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        display: 900,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    text: {
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        },
        display: {
            variant: 'text.heading',
            fontSize: [5, 6],
            fontWeight: 'display',
            letterSpacing: '-0.03em',
            mt: 3,
        },
    },
    styles: {
        Container: {
            p: 3,
            maxWidth: 1024,
        },
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            variant: 'text.display',
        },
        h2: {
            variant: 'text.heading',
            fontSize: 5,
        },
        h3: {
            variant: 'text.heading',
            fontSize: 4,
        },
        h4: {
            variant: 'text.heading',
            fontSize: 3,
        },
        h5: {
            variant: 'text.heading',
            fontSize: 2,
        },
        h6: {
            variant: 'text.heading',
            fontSize: 1,
        },
        a: {
            color: 'primary',
            '&:hover': {
                color: 'secondary',
            },
        },
        hr: {
            border: 0,
            borderBottom: '1px solid',
            borderColor: 'muted',
        },
        img: {
            maxWidth: '100%',
        },
    },
}

export default theme
