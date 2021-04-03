// React
import React, { useEffect, useState, Fragment } from 'react'
// Style
import style from './ContactsPage.module.scss'
// Yandex map
import {
    YMaps,
    Map,
    Placemark
} from 'react-yandex-maps'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Seporator from '../../components/Seporator/Seporator'
import TargetLink from '../../components/TargetLink/TargetLink'
import Heading from './../../components/Heading/Heading'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import { PreviewMobile } from './../../components/PreviewMobile/PreviewMobile'



function ContactsPage() {
    const coordinatesContainer = [
        [47.203250324994436, 39.604171306840875],
        [45.03850219458047, 38.96749014258882]
    ]

    const [coordinates, setCoordinates] = useState(coordinatesContainer[0])

    const setFirstCoordinates = () => {
        setCoordinates(coordinatesContainer[0])
    }

    const setSecondCoordinates = () => {
        setCoordinates(coordinatesContainer[1])
    }

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

    return (
        <main data-aos="fade">
            {isMobile &&
                <PreviewMobile heading="Контакты" seporator>
                    Наши специалисты готовы держать с Вами связь круглые сутки
                </PreviewMobile>
            }
            <Section>
                <Container>
                    <div className={style.container}>
                        <div>
                            <div className={style.mapContainer}>
                                <YMaps>
                                    <Map
                                        height={'100%'}
                                        width={'100%'}
                                        state={{
                                            center: coordinates,
                                            zoom: 15
                                        }}
                                    >
                                        <Placemark
                                            geometry={[47.203250324994436, 39.604171306840875]}
                                        />
                                        <Placemark
                                            geometry={[45.03850219458047, 38.96749014258882]}
                                        />
                                    </Map>
                                </YMaps>
                            </div>
                        </div>
                        <div className={style.contactsContent}>
                            {!isMobile &&
                                <Fragment>
                                    <Heading
                                        style={{
                                            textAlign: 'left',
                                            marginBottom: 20
                                        }}
                                    >
                                        Контакты
                                </Heading>
                                    <Seporator />
                                </Fragment>
                            }
                            <ul className={style.linksContainer}>
                                <li>
                                    <TargetLink>
                                        +7 863 322-61-62
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink>
                                        info@glonass-rg.ru
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink onClick={setFirstCoordinates}>
                                        г.Ростов-на-Дону, ул.Пескова, 1/2, оф.15
                                    </TargetLink>
                                </li>
                                <li>
                                    <TargetLink onClick={setSecondCoordinates}>
                                        г.Краснодар, ул.Калинина, 327, оф.407
                                    </TargetLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default ContactsPage