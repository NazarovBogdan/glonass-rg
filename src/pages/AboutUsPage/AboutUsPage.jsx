// React
import { useEffect, useState } from 'react'
// Style
import style from './AboutUsPage.module.scss'
import styled from 'styled-components';
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Seporator from './../../components/Seporator/Seporator'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import Heading from './../../components/Heading/Heading'
import Paragraph from './../../components/Paragraph/Paragraph'
import { PreviewMobile } from './../../components/PreviewMobile/PreviewMobile'
// Images
import previewImage from './images/content/about-us-preview.jpg'
import aerialItem from './images/content/aerial-item.svg'
import gazItem from './images/content/gaz-item.svg'
import mapItem from './images/content/map-item.svg'
import markerItem from './images/content/marker-item.svg'
import trackDropItem from './images/content/track-drop-item.svg'
import trackItem from './images/content/track-item.svg'
// Logos
import logo1 from './images/content/logo-1.png'
import logo2 from './images/content/logo-2.png'
import logo3 from './images/content/logo-3.png'
import logo4 from './images/content/logo-4.png'
import logo5 from './images/content/logo-5.png'
import logo6 from './images/content/logo-6.png'
import logo7 from './images/content/logo-7.png'
import logo8 from './images/content/logo-8.png'
import logo9 from './images/content/logo-9.png'
import logo10 from './images/content/logo-10.png'
import logo11 from './images/content/logo-11.png'
import logo12 from './images/content/logo-12.png'



function AboutUsPage() {
    const [isMobile, changeLoupe] = useState(false)

    const setLoupe = () => {
        if (window.screen.width <= 1024) {
            changeLoupe(true)
        }
        else {
            changeLoupe(false)
        }
    }

    const Preview = styled.div`
        @media screen and (max-width: 1024px) {
            width: calc(100vw - 20px);
            min-height: 200px;
            height: 100%;
            padding: 30px 0 40px;
            border-radius: 20px;
        }
        height: 670px;
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-radius: 40px;
        background-color: whitesmoke;
        background-image: url("${previewImage}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
        box-shadow: 0px 40px 80px rgba(0, 0, 0, .25);
        text-shadow: 0 0 10px black;
        & p, & h2 {
            color: white;
        }
    `;

    useEffect(() => {
        Aos.init({ duration: 700 });
        setLoupe()
    }, [])

    return (
        <main data-aos="fade">
            {!isMobile &&
                <Section style={{ padding: '0 20px' }}>
                    <Preview>
                        <Container style={{ display: 'block' }}>
                            <div className={style.previewContent}>
                                <p className={style.subtitle}>
                                    Глонасс-Регионы
                                </p>
                                <Heading
                                    style={{
                                        textAlign: 'left',
                                        marginBottom: 20
                                    }}
                                >
                                    О компании
                                </Heading>
                                <Seporator />
                                <Paragraph style={{ textAlign: 'left' }}>
                                    Компания «Глонасс-Регионы» – партнер крупнейших российских разработчиков и производителей систем мониторинга транспорта в Ростовской области.
                                </Paragraph>
                                <Paragraph style={{ textAlign: 'left' }}>
                                    Мы занимаемся разработкой и внедрением комплексных решений по мониторингу транспорта для всех типов подвижных и стационарных объектов с пожизненной гарантией и качественным сервисом.
                                </Paragraph>
                            </div>
                        </Container>
                    </Preview>
                </Section>
            }
            {isMobile &&
                <PreviewMobile heading="О компании" seporator>
                    Компания «Глонасс-Регионы» – партнер крупнейших российских разработчиков и производителей систем мониторинга транспорта в Ростовской области.
                </PreviewMobile>
            }

            <Section>
                <Container>
                    <Heading style={{ marginBottom: 100 }}>
                        Решаемые задачи
                    </Heading>
                    <div className={style.taskContainer}>
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={trackItem} alt="" />
                            <Paragraph>
                                Сокращение пробега, времени доставки и затрат на ТО
                            </Paragraph>
                        </div>
                        <hr className={style.seporator} />
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={aerialItem} alt="" />
                            <Paragraph>
                                Интеграция c 1C и SAP
                            </Paragraph>
                        </div>
                        <hr className={style.seporator} />
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={mapItem} alt="" />
                            <Paragraph>
                                Отимизация маршрута
                            </Paragraph>
                        </div>
                        <hr className={style.seporator} />
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={gazItem} alt="" />
                            <Paragraph>
                                Контроль скоростного режима, расхода топлива (заправки, сливы),контроль местоположения в онлайн режиме
                            </Paragraph>
                        </div>
                        <hr className={style.seporator} />
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={trackDropItem} alt="" />
                            <Paragraph>
                                Повышение трудовой дисциплины, культуры вождения и безопасности перевозок
                            </Paragraph>
                        </div>
                        <hr className={style.seporator} />
                        <div className={style.taskItem} data-aos="fade-up">
                            <img src={markerItem} alt="" />
                            <Paragraph>
                                Предотвращение нецелевого использования техники
                            </Paragraph>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Heading>
                        Наши клиенты
                    </Heading>
                    <div className={style.partnersContainer}>
                        <div data-aos="fade-up">
                            <img src={logo1} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo2} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo7} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo4} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo6} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo11} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo8} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo9} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo5} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo10} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo12} alt="" />
                        </div>
                        <div data-aos="fade-up">
                            <img src={logo3} alt="" />
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default AboutUsPage