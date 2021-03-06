// React
import { useEffect, useState, Fragment } from 'react'
// Style
import style from './MainPage.module.scss'
import styled from 'styled-components'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';
// Smooth link
import AnchorLink from 'react-anchor-link-smooth-scroll'
// Components
import Seporator from './../../components/Seporator/Seporator'
import TargetButton from './../../components/TargetButton/TargetButton'
import Heading from './../../components/Heading/Heading'
import Paragraph from './../../components/Paragraph/Paragraph'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import ModalWindow from './../../components/ModalWindow/ModalWindow'
import Subtitle from '../../components/Subtitle/Subtitle'
import { PreviewMobile } from './../../components/PreviewMobile/PreviewMobile'
// Images
import mechItem from './images/content/mech-item.svg'
import mechItemDark from './images/content/mech-item-dark.svg'
import deskItem from './images/content/desk-item.svg'
import deskItemDark from './images/content/desk-item-dark.svg'
import techItem from './images/content/tech-item.svg'
import techItemDark from './images/content/tech-item-dark.svg'
import stelliteItem from './images/content/satellite-item.svg'
import trackItem from './images/content/track-item.svg'
import phoneItem from './images/content/phone-item.svg'
import cloudItem from './images/content/cloud-item.svg'
import softwareImage1 from './images/content/software-image-1.jpg'
import softwareImage2 from './images/content/software-image-2.jpg'
import softwareImage3 from './images/content/software-image-3.jpg'
import softwareImage4 from './images/content/software-image-4.jpg'
import cardBg1 from './images/content/card-bg-1.svg'
import cardBg2 from './images/content/card-bg-2.svg'
import cardBg3 from './images/content/card-bg-3.svg'
import cardBg4 from './images/content/card-bg-4.svg'
// Video
import video from './../../videos/bg-video.mp4'



function Card(props) {
    const CardOuter = styled.div`
        height: 300px;
        width: 100%;
        padding: 75px 50px;
        @media screen and (max-width: 1024px) {
            height: 200px;
            width: 100%;
            padding: 20px 30px;
        }
        display: flex;
        flex-direction: column;
        background-color: ${props => props.theme.cardsBg};
        background-position: center right -50px;
        background-repeat: no-repeat;
        background-size: 200px;
        border-radius: 20px;
        border: ${props => props.theme.border};
        box-shadow: 0 30px 40px rgba(0, 0, 0, 0.25);
        cursor: grab;
        & h3 {
            margin-bottom: 30px;
            font-size: 20px;
            color: white;
            @media screen and (max-width: 1024px) {
                font-size: 16px;
                margin-bottom: 20px;
            }
        }
        & hr {
            height: 4px;
            width: 70px;
            border: none;
            background-color: ${props => props.theme.secondary};
            border-radius: 2px;
        }
    `;

    return (
        <CardOuter style={{ backgroundImage: `url(${props.bgImage})` }}>
            <h3>
                {props.text}
            </h3>
            <hr />
        </CardOuter>
    )
}

function MainPage(props) {
    const [isModalOpened, showModal] = useState(false)

    const openModal = () => {
        isModalOpened === true ? showModal(false) : showModal(true)
    }

    const cards = [
        {
            bgImage: cardBg1,
            text: 'K?????????????????????????? ?????????????????????? ?????????????????? ???????????????????????????????????? ??????????????????????????',
        },
        {
            bgImage: cardBg2,
            text: '???????????????? ??????????????, ?????????????????? ?????????? ???? 48 ??????????',
        },
        {
            bgImage: cardBg3,
            text: '???? ?? ????????????????????????, ?????????????????? ?? ?????????????????????????????? ???????????? ?????????????? ??????????????????',
        },
        {
            bgImage: cardBg4,
            text: '???????????????? ?????????????? ??????????: ????????????, ?????????????????? ?? ?????????????????? ???????????????????????? ???????????? ',
        }
    ]

    const [isMobile, changeLoupe] = useState(false)

    const setLoupe = () => {
        if (window.screen.width <= 1024) {
            changeLoupe(true)
        }
        else {
            changeLoupe(false)
        }
    }

    const [mechItemImage, setMechItem] = useState(mechItem)
    const [deskItemImage, setDesktem] = useState(deskItem)
    const [techItemImage, setTechItem] = useState(techItem)

    // const setImages = () => {
    //     if (props.appTheme === 'light') {
    //         setMechItem(mechItem);
    //         setDesktem(deskItem);
    //         setTechItem(techItem);
    //     } else {
    //         setMechItem(mechItemDark);
    //         setDesktem(deskItemDark);
    //         setTechItem(techItemDark);
    //     }
    // }

    const RowSeporator = styled.hr`
        height: 150px;
        width: 1px;
        @media screen and (max-width: 1024px) {
            display: none;
        }
        transform: rotate(90deg);
        border: none;
        background-color: ${props => props.theme.primary};
    `;

    const ColumnContainerSeporator = styled.hr`
        height: 50px;
        width: 1px;
        grid-column: 1/-1;
        @media screen and (max-width: 1024px) {
            grid-column: 1;
        }
        border: none;
        background-color: ${props => props.theme.primary};
    `;

    useEffect(() => {
        Aos.init({ duration: 700 });
        setLoupe()
    }, [])

    return (
        <main data-aos="fade">
            <ModalWindow onClose={openModal} isOpen={isModalOpened} />
            {!isMobile &&
                <Section>
                    <div className={style.preview}>
                        <video
                            className={style.video}
                            loop="loop"
                            autoPlay
                            muted
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                        <div className={style.previewContainer}>
                            <Subtitle
                                style={{
                                    textAlign: 'left',
                                    color: 'white',
                                    textShadow: '0 0 5px black',
                                    zIndex: 1,
                                    fontSize: 12
                                }}
                            >
                                ?????????????? ?????????????????????? ????????????????????
                            </Subtitle>
                            <Heading
                                style={{
                                    textAlign: 'left',
                                    color: 'white',
                                    textShadow: '0 0 5px black',
                                    marginBottom: 10,
                                    fontSize: 64
                                }}
                            >
                                GLONASS REGIONS
                            </Heading>
                            <Paragraph
                                style={{
                                    textAlign: 'left',
                                    color: 'white',
                                    textShadow: '0 0 5px black',
                                    marginBottom: 50
                                }}
                            >
                                ???? ???????????????????? ?????????????????????? ?? ???????????????????? ?????????????????????? ?????????????? ???? ?????????????????????? ???????????????????? ?????? ???????? ?????????? ?????????????????? ?? ???????????????????????? ????????????????.
                            </Paragraph>
                            <TargetButton onClick={openModal} style={{ width: 150, margin: 0, border: '1px solid white', color: 'white' }}>
                                ???????????? ????????????
                            </TargetButton>
                        </div>
                    </div>
                </Section>
            }
            {isMobile &&
                <PreviewMobile
                    seporator
                    heading="GLONASS/GPS"
                >
                    ?????????????? ?????????????????????? ????????????????????
                </PreviewMobile>
            }

            <Section>
                <Container>
                    {!isMobile &&
                        <Fragment>
                            <Heading style={{ marginBottom: 30 }}>
                                ?????????????? ?????????????????????? ????????????????????<br />
                                GLONASS/GPS
                            </Heading>
                            <Seporator />
                            <Paragraph>
                                ???? ???????????????????? ?????????????????????? ?? ???????????????????? ?????????????????????? ?????????????? ???? ?????????????????????? ???????????????????? ?????? ???????? ?????????? ?????????????????? ?? ???????????????????????? ????????????????.
                            </Paragraph>
                        </Fragment>
                    }
                    <div className={style.rowContainer}>
                        <div className={style.rowContainerItem}>
                            <img
                                className={style.image}
                                src={mechItemImage}
                                alt=""
                            />
                            <Paragraph>
                                ???????????????????????? ?????? ????????????????????
                            </Paragraph>
                            <TargetButton tag="nav" to="/equipment">
                                ??????????????????
                            </TargetButton>
                        </div>
                        <RowSeporator />
                        <div className={style.rowContainerItem}>
                            <img
                                className={style.image}
                                src={deskItemImage}
                                alt=""
                            />
                            <Paragraph>
                                ???????????????? ????????????
                            </Paragraph>
                            <TargetButton tag="smooth" href="#software" offset={200}>
                                ??????????????????
                            </TargetButton>
                        </div>
                        <RowSeporator />
                        <div className={style.rowContainerItem}>
                            <img
                                className={style.image}
                                src={techItemImage}
                                alt=""
                            />
                            <Paragraph>
                                ?????????????? ??????????????
                            </Paragraph>
                            <TargetButton tag="nav" to="/industry">
                                ??????????????????
                            </TargetButton>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section>
                <div
                    style={{
                        maxWidth: 1140,
                        width: '100%',
                        margin: '0 auto'
                    }}
                >
                    <Heading style={{ textAlign: 'left', marginLeft: 20 }}>
                        ???????????? ???????????????? ??????
                    </Heading>
                </div>
                <Swiper
                    loop
                    centeredSlides
                    slidesPerView="auto"
                    spaceBetween={isMobile ? 10 : 20}
                    style={{ paddingBottom: 70 }}
                    className={style.slider}
                >
                    {cards.map(({ text, bgImage }, i) => {
                        return (
                            <SwiperSlide key={i} style={{ width: isMobile ? 280 : 450 }}>
                                <Card
                                    bgImage={bgImage}
                                    key={i}
                                    text={text}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Section>
            <Section>
                <Container>
                    <Heading>
                        ?????? ?????? ????????????????
                    </Heading>
                    <div className={style.columnContainer}>
                        <div data-aos={"fade-up"}>
                            <Paragraph style={{ marginBottom: 0 }}>
                                ???????????????? ?????????????? ?????????????????? ???? ???????????????????? ?? ?????????? ????????????
                            </Paragraph>
                            <img
                                className={style.image}
                                src={stelliteItem}
                                alt=""
                            />
                        </div>
                        <ColumnContainerSeporator />
                        <div data-aos={"fade-up"}>
                            <img
                                className={style.image}
                                src={trackItem}
                                alt=""
                            />
                            <Paragraph style={{ marginBottom: 0 }}>
                                ?????????????????????????? ???? ???????????????????????? ???????????????? ?????????????????? ???????????????? ???????????? ?? ???????????????? ???????????? Omnicomm Online
                            </Paragraph>
                        </div>
                        <ColumnContainerSeporator />
                        <div data-aos={"fade-up"}>
                            <Paragraph style={{ marginBottom: 0 }}>
                                ???????????? ?? Omnicomm Online ???????????????????????????? ?????????? web-?????????????????? ?? ???????????? ????????????????????
                            </Paragraph>
                            <img
                                className={style.image}
                                src={phoneItem}
                                alt=""
                            />
                        </div>
                        <ColumnContainerSeporator />
                        <div data-aos={"fade-up"}>
                            <img
                                className={style.image}
                                src={cloudItem}
                                alt=""
                            />
                            <Paragraph style={{ marginBottom: 0 }}>
                                ?????? ???????????? ????????????????  ???? ?????????? ??????????????, ?????? ???? ?????????? ?????????????????? ????????????????????????
                            </Paragraph>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className={style.softwareSection} id="software">
                <Container>
                    <div className={style.software}>
                        <div className={style.softwareInner}>
                            <h2 className={style.softwareHeading}>
                                <span className={style.softwareHeadingSpan}>???????????????? </span><br />????????????
                            </h2>
                            <div className={style.itemsBox}>
                                <div>
                                    <p
                                        className={style.itemsHeading}
                                    >
                                        ???????????????????????????? ???????????????????? ?????????????????????????? ??????????????
                                    </p>
                                    <p className={style.itemsParagraph}>
                                        ?????????? ???? ?????????????? ?????????????? (?????? ?????????????? ?????? ????????????????)
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className={style.itemsHeading}
                                    >
                                        ???????????????? ?????????????? ?????????????? (????????????????, ??????????)
                                    </p>
                                    <p className={style.itemsParagraph}>
                                        ?????????????????? ??????????, ???????????????????? ?????????? ???????????????? T?????? ???????????? ??????????????
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className={style.itemsHeading}
                                    >
                                        ???????????????? ?????????????????????? ????????????, ?????????????????? ???????????????? ????????????????,?????????????????? ???????????????? ????????????????????
                                    </p>
                                    <p className={style.itemsParagraph}>
                                        ?????????????? ?????????????????? ?????????????? ?? ???????????? ?????????????????? ?????????????? ???? ???????????????????? ?? ????????????????
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className={style.itemsHeading}
                                    >
                                        ???????????????? ???????????????????????????? ?? ???????????? ????????????
                                    </p>
                                    <p className={style.itemsParagraph}>
                                        ?????????????? ?????????????????? ?????????????? ???? ??????. ???????????????????????????????? ?????????????????? ?? ???????????? ?????????????????? ??????????????
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className={style.itemsHeading}
                                    >
                                        ?????????????????????? ????????????????,  ???????????????????? ???????????? ???? ????, ???????????????????? ??????????????
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.imagesBox}>
                            <img
                                src={softwareImage1}
                                alt=""
                                data-aos={"fade-up"}
                            />
                            <img
                                src={softwareImage2}
                                data-aos={"fade-up"}
                            />
                            <img
                                src={softwareImage3}
                                alt=""
                                data-aos={"fade-up"}
                            />
                            <img
                                src={softwareImage4}
                                data-aos={"fade-up"}
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        </main >
    )
}



export default MainPage