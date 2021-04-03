// React
import React, { Fragment, useEffect, useState } from 'react'
// Style
import style from './IndustryItemPage.module.scss'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Section from '../../components/Section/Section'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'
import TargetButton from '../../components/TargetButton/TargetButton'
import Container from './../../components/Container/Container'
import ModalWindow from './../../components/ModalWindow/ModalWindow'
import { PreviewMobile } from './../../components/PreviewMobile/PreviewMobile'



function MobileList(props) {
    const [isListOpened, openList] = useState(false)

    const openThisList = () => {
        openList(!isListOpened)
    }

    const [isModalOpened, showModal] = useState(false)

    const openModal = () => {
        isModalOpened === true ? showModal(false) : showModal(true)
    }

    return (
        <div className={style.cardContainer}>
            <ModalWindow onClose={openModal} isOpen={isModalOpened} />
            <button className={style.isMobileButton} onClick={openThisList}>
                <h3 className={style.mobileH3}>
                    <div>{props.heading}</div>
                </h3>
            </button>
            {isListOpened &&
                <Fragment>
                    <ul>
                        {props.children}
                    </ul>
                    <TargetButton style={{ marginBottom: 20 }} onClick={openModal}>
                        Заказать
                    </TargetButton>
                </Fragment>
            }
        </div>
    )
}

function IndustryItemPage(props) {
    useEffect(() => {
        Aos.init({ duration: 700 });
    }, [])

    const [isModalOpened, showModal] = useState(false)

    const openModal = () => {
        isModalOpened === true ? showModal(false) : showModal(true)
    }

    return (
        <main data-aos="fade">
            <ModalWindow onClose={openModal} isOpen={isModalOpened} />
            <Section>
                <div className={style.preview} style={{ backgroundImage: props.case.preview.previewBg }}>
                    <div className={style.previewContainer}>
                        <div className={style.previewInner}>
                            <h1 className={style.previewHeading}>
                                {props.case.preview.heading}
                            </h1>
                            <Paragraph className={style.previewParagraph}>
                                {props.case.preview.paragraph}
                            </Paragraph>
                            <ul className={style.ul}>
                                {props.case.preview.list.map(i => {
                                    return <li>{i}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className={style.isDesk}>
                <Container>
                    <Heading style={{ marginBottom: 30 }}>
                        Готовые решения
                    </Heading>
                    <Paragraph>
                        Позволяет оптимизировать работу и сократить издержки предприятия
                    </Paragraph>
                </Container>
                <Swiper
                    centeredSlides
                    slidesPerView="auto"
                    spaceBetween={20}
                    style={{ paddingBottom: 70 }}
                    navigation={{
                        nexEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    swipeHandler={false}
                >
                    {props.case.swiper.map(({ heading }, i) => {
                        return <SwiperSlide style={{ width: 880 }}>
                            <div className={style.card}>
                                <Paragraph className={style.number}>
                                    №<span>{i + 1}</span>
                                </Paragraph>
                                <h3 className={style.h3}>
                                    {heading}
                                </h3>
                                <ul>
                                    {props.case.swiper[i].list.map(j => {
                                        return <li><p>{j}</p></li>
                                    })}
                                </ul>
                                <div className={style.navContainer}>
                                    <TargetButton style={{
                                        backgroundColor: 'white',
                                        color: '#023872',
                                    }} onClick={openModal}>
                                        Заказать
                                    </TargetButton>
                                    <button className="swiper-button-prev">	&#60; </button>
                                    <button className="swiper-button-next"> &#62; </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </Section>
            <Section className={style.isMobile}>
                <Container>
                    <Heading>
                        Готовые решения
                    </Heading>
                    <Paragraph>
                        Позволяет оптимизировать работу и сократить издержки предприятия
                    </Paragraph>
                </Container>
                {props.case.swiper.map(({ heading }, i) => {
                    return (
                        <MobileList heading={heading}>
                            {props.case.swiper[i].list.map(j => {
                                return <li className={style.mobileLi} key={j}><p>{j}</p></li>
                            })}
                        </MobileList>
                    )
                })}
            </Section>
        </main>
    )
}



export default IndustryItemPage