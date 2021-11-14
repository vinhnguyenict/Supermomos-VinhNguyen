import styled from 'styled-components'
import Slider from 'react-slick'

import FlipImage from 'components/FlipImage'

const SliderWrapper = styled(Slider)`
    position: relative;
    z-index: 2;
    width: 100%;

    .slick-slide {
        padding: 10px;
        box-sizing: border-box;
    }
`

const FrameImage = styled.div`
    width: 100%;
    height: 35vh;
`

interface PropsType {
    slidesToScroll: 1 | -1 // display ltr | rtl
}

const ImagesSlider = (props: PropsType) => {
    const { slidesToScroll } = props

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: 'linear',
    }

    const images = new Array(5).fill(0)

    return (
        <SliderWrapper {...settings}>
            {images.map((_, index) => {
                return (
                    <FrameImage key={index}>
                        <FlipImage src={`/images/img-${index + 1}.jpeg `} />
                    </FrameImage>
                )
            })}
        </SliderWrapper>
    )
}
export default ImagesSlider
