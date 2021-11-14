import React from 'react'
import Header from './Header'

const LayoutFC: React.FC = ({ children, ...props }) => {
    return (
        <React.Fragment>
            <Header {...props} />
            {children}
        </React.Fragment>
    )
}

export default LayoutFC
