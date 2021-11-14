import { useState, useEffect, useRef } from 'react'

import styled from 'styled-components'

interface PropsType {
    src: string
}

const Image = styled.img`
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
`

const FlipImage = (props: PropsType) => {
    const { src } = props

    const imgRef = useRef<HTMLImageElement>(null)
    const [rotate, setRotate] = useState(0)
    const [transform, setTransform] = useState<'X' | 'Y'>('X')

    useEffect(() => {
        const inter = setInterval(() => {
            if (rotate > 150 && rotate < 180) {
                if (imgRef?.current) {
                    console.log(`rotate${transform}(${rotate}deg)`)

                    imgRef.current.style.transition = `transform 0.8s`
                    imgRef.current.style.transformStyle = `preserve-3d`
                    imgRef.current.style.transform = `rotate${transform}(${rotate}deg)`
                }
            }

            if (rotate === 180) {
                const nextTransform = transform === 'X' ? 'Y' : 'X'

                if (imgRef?.current) {
                    imgRef.current.style.transform = `unset`
                }
                setRotate(0)
                setTransform(nextTransform)
            } else {
                setRotate(rotate + 1)
            }
        }, 100)

        return () => {
            clearInterval(inter)
        }
    }, [rotate, transform])

    return <Image ref={imgRef} src={src} />
}

export default FlipImage
