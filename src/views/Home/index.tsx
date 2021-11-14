import React from 'react'

import { UserContextProvider } from './UserContext'
import ImagesSlider from './components/ImagesSlider'
import DeviceContent from './components/DeviceContent'
import { Page } from './Home.style'

const HomePage: React.FC = () => {
    return (
        <UserContextProvider>
            <Page>
                <ImagesSlider slidesToScroll={1} />
                <ImagesSlider slidesToScroll={-1} />
                <DeviceContent />
            </Page>
        </UserContextProvider>
    )
}
export default HomePage
