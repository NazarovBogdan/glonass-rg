// React
import React, { useEffect, useState, Fragment } from 'react'
// Style
import style from './IndustryPage.module.scss'
import styled from 'styled-components';
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// RRD
import { Route, Switch, NavLink } from 'react-router-dom'
// Components
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import Heading from './../../components/Heading/Heading'
import Subtitle from './../../components/Subtitle/Subtitle'
import Seporator from './../../components/Seporator/Seporator'
import Paragraph from './../../components/Paragraph/Paragraph'
import { PreviewMobile } from './../../components/PreviewMobile/PreviewMobile'
// Pages
import IndustryItemPage from './../../pages/IndustryItemPage/IndustryItemPage'
// Images
import itemImage1 from './images/content/item-image-1.jpg'
import itemImage2 from './images/content/item-image-2.jpg'
import itemImage3 from './images/content/item-image-3.jpg'
import itemImage4 from './images/content/item-image-4.jpg'
import itemImage5 from './images/content/item-image-5.jpg'
import itemImage6 from './images/content/item-image-6.jpg'
// DATA
import DATA from './data.jsx'



function IndustryItem(props) {
    const Card = styled.div`
        & h3 {
            color: white;
            font-size: 32px;
            text-transform: uppercase;
            text-shadow: 0 0 5px black;
            @media screen and (max-width: 1024px) {
                font-size: 24px;
            }
        }
        height: 300px;
        width: 550px;
        @media screen and (max-width: 1024px) {
            width: calc(100vw - 20px);
            height: 200px;
        }
        padding: 0 20px;
        position: relative;
        display: flex;
        align-items: center;
        background-color: ${props => props.theme.cardsBg};
        border-radius: 20px;
        color: white;
        font-size: 30px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transition: .2s;
        &:hover {
            transform: translateY(-2);
            box-shadow: 0 30px 30px rgba(0, 0, 0, .25);
        }
    `;

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    return (
        <NavLink className={style.cardLink} {...props}>
            <Card data-aos="fade-up" style={{ backgroundImage: props.bgImage }}>
                <h3>
                    {props.heading}
                </h3>
            </Card>
        </NavLink>
    )
}

function IndustryPage() {
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

    const cards = [
        {
            bgImage: itemImage2,
            heading: 'Мониторинг спецтехники ',
            path: "/industry/special-equipment"
        },
        {
            bgImage: itemImage1,
            heading: 'Мониторинг сельхозтехники ',
            path: "/industry/agricultural-equipment"
        },
        {
            bgImage: itemImage3,
            heading: 'МОНИТОРИНГ ОБЩЕСТВЕННОГО ТРАНСПОРТА',
            path: "/industry/social-equipment"
        },
        {
            bgImage: itemImage4,
            heading: 'МОНИТОРИНГ БЕНЗОВОЗОВ И ТОПЛИВОЗАПРАВЩИКОВ',
            path: "/industry/gasoline-equipment"
        },
        {
            bgImage: itemImage5,
            heading: 'Мониторинг грузовых автомобилей',
            path: "/industry/cargo-equipment"
        },
        {
            bgImage: itemImage6,
            heading: 'Мониторинг легковых автомобилей',
            path: "/industry/passenger-equipment"
        }
    ]

    console.log(DATA[0]);

    return (
        <Switch>
            <Route path="/industry/special-equipment">
                <IndustryItemPage case={DATA[0]} />
            </Route>
            <Route path="/industry/agricultural-equipment">
                <IndustryItemPage case={DATA[1]} />
            </Route>
            <Route path="/industry/social-equipment">
                <IndustryItemPage case={DATA[2]} />
            </Route>
            <Route path="/industry/gasoline-equipment">
                <IndustryItemPage case={DATA[3]} />
            </Route>
            <Route path="/industry/cargo-equipment">
                <IndustryItemPage case={DATA[4]} />
            </Route>
            <Route path="/industry/passenger-equipment">
                <IndustryItemPage case={DATA[5]} />
            </Route>
            <Route path="/industry/">
                <main>
                    {isMobile &&
                        <PreviewMobile heading="Отраслевые решения" seporator>
                            Мониторинг транспорта – это инновационное решение по контролю за авто вашего бизнеса. Компания Глонасс-Регионы предлагает установить систему контроля на любой тип транспорта
                        </PreviewMobile>
                    }
                    <Section data-aos="fade">
                        <Container>
                            {!isMobile &&
                                <Fragment>
                                    <Subtitle>
                                        Глонасс-Регионы
                                    </Subtitle>
                                    <Heading style={{ marginBottom: 30 }}>
                                        Отраслевые решения
                                    </Heading>
                                    <Seporator />
                                    <Paragraph>
                                        Компания «Глонасс-Регионы» – партнер крупнейших российских разработчиков и производителей систем мониторинга транспорта в Ростовской области.
                                    </Paragraph>
                                </Fragment>
                            }
                            <div className={style.cardContainer}>
                                {cards.map(({ bgImage, heading, path }, i) => {
                                    return <IndustryItem to={path} key={i} heading={heading} bgImage={`url(${bgImage})`} />
                                })}
                            </div>
                        </Container>
                    </Section>
                </main>
            </Route >
        </Switch >
    )
}



export default IndustryPage