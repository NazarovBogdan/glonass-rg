// React
import { useEffect, useState, Fragment } from 'react'
// Style
import style from './EquipmentPage.module.scss'
import styled from 'styled-components';
// RRD
import { NavLink } from 'react-router-dom'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Seporator from './../../components/Seporator/Seporator'
import Heading from './../../components/Heading/Heading'
import Paragraph from './../../components/Paragraph/Paragraph'
import Container from './../../components/Container/Container'
import Section from './../../components/Section/Section'
import Subtitle from './../../components/Subtitle/Subtitle'
import { PreviewMobile } from './../../components/PreviewMobile/PreviewMobile'
// Images
import videoItem from './images/content/video-item.png'
import terminalItem from './images/content/terminal-item.png'
import sensorItem from './images/content/sensor-item.png'
import equipmentItem from './images/content/equipment-item.png'



function EquipmentPage(props) {
    const [isMobile, changeLoupe] = useState(false)

    const setLoupe = () => {
        if (window.screen.width <= 1024) {
            changeLoupe(true)
        }
        else {
            changeLoupe(false)
        }
    }

    useEffect(() => {
        Aos.init({ duration: 700 });
        setLoupe()
    }, [])

    const setName = (newValue, categoryname) => {
        props.categoryName(newValue, categoryname)
    }

    const ItemsContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1024px) {
            grid-template-columns: 1fr;
        }
        grid-gap: 1em;
        & a {
            text-decoration: none;
        }
        & a:nth-child(1) div {
            background-image: url("${videoItem}");
        }

        & a:nth-child(2) div {
            background-image: url("${terminalItem}");
        }

        & a:nth-child(3) div {
            background-image: url("${sensorItem}");
        }

        & a:nth-child(4) div {
            background-image: url("${equipmentItem}");
        }
    `;

    const Item = styled.div`
        height: 300px;
        width: 550px;
        padding: 0 40px;
        @media screen and (max-width: 1024px) {
            width: calc(100vw - 20px);
            height: 200px;
            padding: 0 20px;
        }
        position: relative;
        display: flex;
        align-items: center;
        background-color: ${props => props.theme.cardsBg};
        border-radius: 20px;
        color: white;
        font-size: 30px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        transition: 0.2s;
        border: ${props => props.theme.border};
        & h3 {
            color: white;
        }
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 30px 30px rgba(0, 0, 0, 0.25);
        }
    `;

    return (
        <main data-aos="fade">
            {isMobile &&
                <PreviewMobile heading="Оборудование" seporator>
                    Компания «Глонасс-Регионы» – партнер крупнейших российских разработчиков и производителей систем мониторинга транспорта в Ростовской области.
                </PreviewMobile>
            }
            <Section>
                <Container>
                    {!isMobile &&
                        <Fragment>
                            <Subtitle>
                                Глонасс-Регионы
                            </Subtitle>
                            <Heading style={{ marginBottom: 30 }}>
                                Оборудование
                            </Heading>
                            <Seporator />
                            <Paragraph>
                                Компания «Глонасс-Регионы» – партнер крупнейших российских разработчиков и производителей систем мониторинга транспорта в Ростовской области.
                                    </Paragraph>
                        </Fragment>
                    }
                    <ItemsContainer>
                        <NavLink to="/category/video" onClick={() => {
                            setName("video", "Видеомониторинг")
                        }}>
                            <Item>
                                <h3>
                                    Видеомониторинг
                                </h3>
                            </Item>
                        </NavLink>
                        <NavLink to="/category/terminals" onClick={() => {
                            setName("terminals", "Терминалы")
                        }}>
                            <Item>
                                <h3>
                                    Терминалы
                                </h3>
                            </Item>
                        </NavLink>
                        <NavLink to="/category/sensors" onClick={() => {
                            setName("sensors", "Датчики уровня топлива")
                        }}>
                            <Item>
                                <h3>
                                    Датчики уровня<br />топлива
                                </h3>
                            </Item>
                        </NavLink>
                        <NavLink to="/category/other-eqipments" onClick={() => {
                            setName("other-eqipments", "Дополнительное оборудование")
                        }}>
                            <Item>
                                <h3>
                                    Дополнительное<br />оборудование
                                </h3>
                            </Item>
                        </NavLink>
                    </ItemsContainer>
                </Container>
            </Section>
        </main>
    )
}



export default EquipmentPage