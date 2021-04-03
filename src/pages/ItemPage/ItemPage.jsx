// React
import { useEffect, useState, Fragment } from 'react'
// Style
import style from './ItemPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Components
import Section from '../../components/Section/Section'
import Container from '../../components/Container/Container'
import TargetButton from '../../components/TargetButton/TargetButton'
import ModalWindow from './../../components/ModalWindow/ModalWindow'

import { setItemsAPI } from "../../components/API/API"



function ItemPage(props) {
    const [isModalOpened, showModal] = useState(false)

    const openModal = () => {
        isModalOpened === true ? showModal(false) : showModal(true)
    }
    const [item, setItem] = useState([
        {
            name: '',
        },
        {
            photo: ''
        },
        {
            description: '',
        },
        {
            characters: '',
            props: ''
        }
    ])

    useEffect(() => {
        Aos.init({ duration: 700 });

        const DATA = new FormData()

        DATA.append("name", props.itemPar.name)

        setItemsAPI(DATA).then(response => {
            setItem(response)
        })
    }, [])

    const desctopImage = new Image();
    desctopImage.src = item[2].photo;

    const [isTableFull, setTableFull] = useState(false)

    const showTable = () => {
        setTableFull(!isTableFull)
    }

    return (
        <main data-aos="fade">
            <ModalWindow onClose={openModal} isOpen={isModalOpened} />
            <Section style={{ marginTop: 20 }}>
                <Container>
                    <div className={style.gridContainer}>
                        <div className={style.previewImage}>
                            <img src={desctopImage.src} />
                        </div>
                        <div className={style.descriptionBlock}>
                            <div>
                                <div className={style.descriptionBlockInner}>
                                    <h2>
                                        {item[0].name}
                                    </h2>
                                    <div className={style.headingBlock}>
                                        <h3>
                                            Описание
                                        </h3>
                                    </div>
                                    <p className={style.paragraph}>
                                        {item[1].description}
                                    </p>
                                    <TargetButton onClick={openModal}>
                                        Заказать
                                    </TargetButton>
                                </div>
                            </div>
                        </div>
                        <div className={style.charBlock}>
                            <div className={style.headingBlock}>
                                <h3>
                                    Характеристики
                                </h3>
                            </div>
                            <div className={style.tableContainer}>
                                <table>
                                    <tbody>
                                        {/* {item.forEach((element, i) => {
                                        if (i >= 3) {
                                            return
                                        }
                                        return (
                                            <tr key={i}>
                                                <td><p>{element.characters}</p></td>
                                                <td><p>{element.props}</p></td>
                                            </tr>
                                        )
                                    })} */}
                                        {!isTableFull &&
                                            item.map((i) => {
                                                if (i.characters === undefined || i.characters === undefined) {
                                                    return
                                                }
                                                if (item.indexOf(i) >= 6) {
                                                    return
                                                }
                                                return (
                                                    <tr key={i}>
                                                        <td><p>{i.characters}</p></td>
                                                        <td><p>{i.props}</p></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        {isTableFull &&
                                            item.map((i) => {
                                                if (i.characters === undefined || i.characters === undefined) {
                                                    return
                                                }
                                                return (
                                                    <tr key={i}>
                                                        <td><p>{i.characters}</p></td>
                                                        <td><p>{i.props}</p></td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                                <button className={style.showButton} onClick={showTable}>{isTableFull ? 'Скрыть' : 'Ещё'}</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main >
    )
}



export default ItemPage