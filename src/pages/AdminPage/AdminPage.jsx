// React
import React, { useEffect, useState} from 'react'
// Style
import style from './AdminPage.module.scss'
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// Formik
import { Formik, Form, Field } from 'formik'
// RRD
import {
    Switch,
    Route,
    NavLink,
    Redirect
} from 'react-router-dom'
// Modal
import Modal from 'react-modal'
// Components
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'
import TargetButton from '../../components/TargetButton/TargetButton'
// API
import { addItems, deleteItemsCategory, setItemChangeModal, setItemsCategory } from './../../components/API/API'
import { ChangeItemPage } from './ChangeItem'


const CharRecordInput = (props) => {
    return(
        <div className={style.inputContainer}>
            <Field name={`char${props.id}`} type="text" placeholder="Характеристика" />
            <Field name={`props${props.id}`} type="text" placeholder="Свойство" />
            <button className={style.delete} onClick={() => {props.deleteField(props.id)}} type="button">
                <p className={style.button_char_delete}>+</p>
            </button>
        </div>
    )
   
}

function SureModal(props) {


    const deleteItem = (id) =>{
        const DATA = new FormData();
        DATA.append("id", id)
        deleteItemsCategory(DATA).then(response => {
            alert("Товар Удален")
            props.openSureModal()
        })
    }
    


    return (
        <Modal className={style.sureModal} {...props}>
            <h3>
                Вы уверены, что хотите удалить товар?
            </h3>
            <div>
                <TargetButton style={{
                    marginTop: 20,
                    marginRight: 10,
                }}
                onClick={ () => {
                    deleteItem(props.idItemFoDelete)
                }}>
                    Да
                </TargetButton>
                <TargetButton style={{
                    marginTop: 20,
                    backgroundColor: '#DA4141',
                    color: 'white',
                    border: 'none'
                }}
                    onClick={props.onClose}
                >
                    Отмена
                </TargetButton>
            </div>
        </Modal>
    )
}

function ItemModal(props) {

    const [fieldsValue, fieldValuePlus] = useState([1])


    const deleteField = (id) => {
        const fieldsValueNew = fieldsValue.filter(item => item !== id)
        fieldValuePlus(fieldsValueNew)  
    }

    const addNewField = () => {
        const fieldsPlus = + fieldsValue.length + Math.floor(Math.random() * 1000)
        fieldValuePlus([...fieldsValue, fieldsPlus])   
    }

    return (
        <Modal className={style.modal} {...props}>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    props1: '',
                    char1: ''
                }}
                onSubmit={(values) => {
                    const val = Object.entries(values);

                    const name = val[0][1]

                    const description = val[1][1]

                    const photoEl = val.length - 1
                    const photo = val[photoEl][1]

                    let arrChar = []
                    let arrProps = []


                    val.filter(vaiI => {
                        if (vaiI[0][0] === 'c'){
                            arrChar.push(vaiI[1] + "&^")
                        }
                    })

                    val.filter(vaiI => {
                        if (vaiI[0][0] === 'p'){
                            arrProps.push(vaiI[1] + "&^")
                        }
                    })

                    const DATA = new FormData();
                    DATA.append('char', arrChar)
                    DATA.append('prop', arrProps)
                    DATA.append('name', name);
                    DATA.append('description', description)
                    DATA.append('file', photo)
                    DATA.append("category", props.categoryName)
                    DATA.append("id", Math.floor(Math.random() * 1000000))
                    addItems(DATA).then(response => {
                        alert("Товар Добален")
                        props.openModal()
                    })
                }}
            >
                {({ isSubmitting,  setFieldValue }) => (
                    <Form className={style.modalContainer}>
                        <div className={style.imageContainer}>
                            <button type="button" className={style.addPhoto}>
                                <label htmlFor="file" className={style.labelPhoto}>
                                    <svg width="60" height="60" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.932 5.57797H27.52V5.02197C27.52 2.53797 25.504 0.521973 23.02 0.521973H14.413C11.928 0.521973 9.913 2.53797 9.913 5.02197V5.57797H4.5C2.015 5.57797 0 7.59297 0 10.078V26.412C0 28.896 2.015 30.912 4.5 30.912H32.934C35.419 30.912 37.434 28.896 37.434 26.412V10.078C37.432 7.59197 35.417 5.57797 32.932 5.57797ZM18.715 26.244C14.027 26.244 10.215 22.432 10.215 17.744C10.215 13.057 14.027 9.24397 18.715 9.24397C23.403 9.24397 27.215 13.056 27.215 17.744C27.215 22.432 23.402 26.244 18.715 26.244ZM23.215 17.744C23.215 20.223 21.195 22.244 18.715 22.244C16.235 22.244 14.215 20.223 14.215 17.744C14.215 15.264 16.235 13.244 18.715 13.244C21.195 13.244 23.215 15.264 23.215 17.744Z" fill="black" />
                                    </svg>
                                </label>
                                <input className={style.inputPhoto} id="file" name="file" type="file" onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0]);
                                }}/>
                            </button>
                        </div>
                        <div>
                            <Field name="name" placeholder="Название" />
                            <h3>
                                Описание
                            </h3>
                            <div>
                                <Field name="description" type="text" placeholder="Описание" />
                            </div>
                            <h3>
                                Характеристики
                            </h3>
                            <div>
                                {fieldsValue.map(i => <CharRecordInput key={i} id={i} deleteField={deleteField}/>)}
                            </div>
                            <button type="button" onClick={addNewField} className={style.add}>
                                +
                            </button>
                            <div className={style.buttonContainer}>
                                <TargetButton
                                    disabled={isSubmitting}
                                    style={{
                                        backgroundColor: '#49C155',
                                        color: 'white',
                                        border: 'none',
                                        marginRight: 10,
                                        marginBottom: 10,
                                        width: 'calc(50% - 5px)'
                                    }}
                                >
                                    Добавить
                                </TargetButton>
                            </div>
                            <TargetButton type="button" style={{ width: '100%' }} onClick={props.onClose}>
                                Отменить
                            </TargetButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal >
    )
}

function CategoryItem(props) {

    useEffect(() => {
        Aos.init({ duration: 700 })
    })

    const [isSureModalOpened, openSureModal] = useState(false)

    const setSureModal = () => {
        openSureModal(!isSureModalOpened)
    }

    const itemImage = new Image();
    itemImage.src = props.img;

    return (
        <div className={style.item} data-aos="fade">

            <SureModal idItemFoDelete={props.id} openSureModal={openSureModal} isOpen={isSureModalOpened} onAfterOpen={() => document.body.style.overflow = "hidden"} onAfterClose={() => document.body.style.overflow = "visible"} onClose={setSureModal} />

            <button className={style.deleteItem} onClick={setSureModal}>
                <p>
                    +
                </p>
            </button>
            <div className={style.itemPreview}>
                <img src={itemImage.src} />
            </div>
            <Paragraph
                style={{
                    textAlign: 'left',
                    margin: '10px 0'
                }}
            >
                {props.name}
            </Paragraph>
            <div className={style.priceContainer}>
                <a to="/item">
                    <TargetButton
                        style={{
                            height: 40,
                            minWidth: 150
                        }}
                        onClick = {()=> {props.setItemChenge(props.id)}}
                    >
                        <NavLink to={`${props.id}`}>
                            Изменить
                        </NavLink>
                    </TargetButton>
                </a>
            </div>
        </div>
    )
}

function AddNewItem(props) {
    return (
        <button className={style.addNewItem} {...props}>
            <div className={style.addNewItemInner} />
        </button>
    )
}

function AdminPage(props) {

    
    // Navigation bar style
    const [bgColor, setColor] = useState('transparent')
    const [boxShadow, setShadow] = useState('none')

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setColor('white')
            setShadow('0 0 5px grey')
        }
        else {
            setColor('transparent')
            setShadow('none')
        }
    }

    // Modal
    const [isModalOpened, openModal] = useState(false)

    const setModal = () => {
        openModal(!isModalOpened)
    }


    // changeModal
    const [isChangeModalOpened, openChangeModal] = useState(false)
    const [ItemChange, setChengeItem] = useState([])

    const setChangeModal = (id) => {
        openChangeModal(!isChangeModalOpened)
        const DATA = new FormData()
        DATA.append("id", id)
        setItemChangeModal(DATA).then(response => {
            setChengeItem(response)
        })
    }

    // Base
    const [categoryItem, setItems] = useState()

    useEffect(() => {
        Aos.init({ duration: 700 })
        window.addEventListener('scroll', handleScroll)
    })

    const [itemID , changeItemID] = useState()
    const setItemChenge = (id) =>{
        changeItemID(id)
    }

    const [categoryName, setCategoryName] = useState()

    const setItemsAdmin = (categoryName) => {
        setCategoryName(categoryName)
        const DATA = new FormData()
        DATA.append("category", categoryName)
        setItemsCategory(DATA).then(response => {
            setItems(response.map(i => <CategoryItem setItemChenge={setItemChenge} key={i.id} id={i.id} name={i.name} img={i.img} modal={setChangeModal} />))
        })
    }

    if(props.idUser === 0) return <Redirect to="/adminmodal" />;

    return (
        <main data-aos="fade">
            {/* <ChangeItemModal Item={ItemChange} isOpen={isChangeModalOpened} onAfterOpen={() => document.body.style.overflow = "hidden"} onAfterClose={() => document.body.style.overflow = "visible"} onClose={setChangeModal} /> */}
            <ItemModal  categoryName={categoryName} openModal={openModal} isOpen={isModalOpened} onAfterOpen={() => document.body.style.overflow = "hidden"} onAfterClose={() => document.body.style.overflow = "visible"} onClose={setModal} />
            <Section>
                <Container>
                    <Heading>
                        Оборудование
                    </Heading>
                    <nav className={style.navigationBar} style={{
                        backgroundColor: bgColor,
                        boxShadow: boxShadow
                    }}>
                        <ul>
                            <li>
                                <NavLink
                                    className={style.navLink}
                                    activeClassName={style.selected}
                                    to="/admin/video"
                                    onClick={() => { setItemsAdmin("video") }}
                                >
                                    Видеомониторинг
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={style.navLink}
                                    activeClassName={style.selected}
                                    to="/admin/other-eqipments"
                                    onClick={() => { setItemsAdmin("other-eqipments") }}
                                >
                                    Дополнительное оборудование
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={style.navLink}
                                    activeClassName={style.selected}
                                    to="/admin/sensors"
                                    onClick={() => { setItemsAdmin("sensors") }}
                                >
                                    Датчики уровня топлива
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={style.navLink}
                                    activeClassName={style.selected}
                                    to="/admin/terminals"
                                    onClick={() => { setItemsAdmin("terminals") }}
                                >
                                    Терминалы
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/admin/video">
                            <div className={style.itemsContainer}>
                                {categoryItem}
                                <AddNewItem onClick={setModal} />
                            </div>
                        </Route>
                        <Route path="/admin/other-eqipments">
                            <div className={style.itemsContainer}>
                                {categoryItem}
                                <AddNewItem onClick={setModal} />
                            </div>
                        </Route>
                        <Route path="/admin/sensors">
                            <div className={style.itemsContainer}>
                                {categoryItem}
                                <AddNewItem onClick={setModal} />
                            </div>
                        </Route>
                        <Route path="/admin/terminals">
                            <div className={style.itemsContainer}>
                                {categoryItem}
                                <AddNewItem onClick={setModal} />
                            </div>
                        </Route>
                        <Route path={`/admin/${itemID}`}>
                            < ChangeItemPage itemID={itemID}/>
                        </Route>
                    </Switch>
                </Container>
            </Section>
        </main>
    )
}



export default AdminPage