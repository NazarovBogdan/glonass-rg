// react
import { useEffect } from 'react'
// Styled components
import styled from 'styled-components'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'



export const PreviewMobile = (props) => {
    const Container = styled.div`
        position: relative;
        min-height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
        margin-bottom: 80px;
    `

    const PreviewBlock = styled.div`
        width: 150vw;
        height: 500px;
        background-color: ${props => props.theme.primary};
        border-radius: 50%;
        position: absolute;
        bottom: -50px;
        z-index: -1;
        color: black;
    `

    const Subtitle = styled.p`
        font-size: 10px;
        color: white;
        margin-bottom: 5px;
    `

    const Seporator = styled.hr`
        width: 30px;
        height: 2px;
        border-radius: 1px;
        background-color: white;
        margin-bottom: 10px;
        border: none;
    `

    const Heading = styled.h1`
        font-size: 28px;
        color: white;
        margin-bottom: 10px;
        text-align: center;
    `

    const Paragraph = styled.p`
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        width: 270px;
        color: white;
    `

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <Container>
            <PreviewBlock data-aos="zoom-in" />
            <Subtitle>
                Глонасс-Регионы
                </Subtitle>
            <Heading>
                {props.heading}
            </Heading>
            {props.seporator && <Seporator />}
            <Paragraph>
                {props.children}
            </Paragraph>
        </Container>
    )
}