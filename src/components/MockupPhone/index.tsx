import React from 'react'
import styled from 'styled-components'

const Phone = styled.div`
    position: relative;
    z-index: 1;
    width: 360px;
    height: 780px;
    background-color: #fff;
    border-radius: 40px;
    box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919,
        0px 0px 0px 20px #111;

    &:before,
    &:after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    &:after {
        bottom: 7px;
        width: 140px;
        height: 4px;
        background-color: #f2f2f2;
        border-radius: 10px;
    }

    // frontal camera/speaker frame
    &:before {
        top: 0px;
        width: 56%;
        height: 30px;
        background-color: #1f1f1f;
        border-radius: 0px 0px 40px 40px;
    }
`

const Speaker = styled.i`
    position: absolute;
    display: block;
    color: transparent;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 6px);
    height: 8px;
    width: 15%;
    background-color: #101010;
    border-radius: 8px;
    box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
`
const Camera = styled.b`
    position: absolute;
    display: block;
    color: transparent;
    left: 10%;
    top: 0px;
    transform: translate(180px, 4px);
    width: 12px;
    height: 12px;
    background-color: #101010;
    border-radius: 12px;
    box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);

    &:after {
        content: '';
        position: absolute;
        background-color: #2d4d76;
        width: 6px;
        height: 6px;
        top: 2px;
        left: 2px;
        top: 3px;
        left: 3px;
        display: block;
        border-radius: 4px;
        box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
    }
`

const Body = styled.div`
    position: relative;
    padding: 35px 0;
    color: #1f1f1f;
`

const MockupPhone: React.FC = ({ children }) => {
    return (
        <Phone>
            <Speaker />
            <Camera />
            <Body>{children}</Body>
        </Phone>
    )
}

export default MockupPhone
