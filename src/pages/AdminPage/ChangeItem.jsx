// React
import { useEffect, useState} from 'react'
// Style
import style from './ItemPage.module.scss'
import { useFormik } from 'formik'
// Components
import Section from '../../components/Section/Section'
import Container from '../../components/Container/Container'
import Modal from 'react-modal'
import { setItemChangeModal } from "../../components/API/API"
import TargetButton from '../../components/TargetButton/TargetButton'
import {changeImgItem, changeDescItem, changeNameItem, deleteChar, changeCharItem } from '../../components/API/API'


export function ChangeItemPage(props) {

    
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

        const DATA = new FormData()

        DATA.append("id", props.itemID)

        setItemChangeModal(DATA).then(response => {
            setItem(response)
        })
    }, [])

    const [isSureModalOpened, openSureModal] = useState(false)
    const [idDeleteChar, idDeleteCharFunc] = useState()

    const deleteChar = (id) =>{
        idDeleteCharFunc(id)
        openSureModal(!isSureModalOpened)
    }

    const deleteCharUI = (nemItems) => {
        setItem(nemItems)
    }
 
    const addNewField = (itemID) => {
        let itemPlus = {
            id: + item.length + Math.floor(Math.random() * 100000),
            characters: "", 
            props: "", 
            itemID: itemID
        } 
        setItem([...item, itemPlus])   
    }


    const desctopImage = new Image();
    desctopImage.src = item[2].photo;

    const FormName = useFormik({
        initialValues: {
            name: item[0].name
          },
        onSubmit: (values,{ resetForm }) => {
            const DATA = new FormData()
            DATA.append("id",props.itemID)
            DATA.append("name", values.name)
            changeNameItem(DATA).then(response => {
                alert(response)
                resetForm()
            });
        },
    });

    const FormDesc = useFormik({
        initialValues: {
            description: item[1].description
          },
        onSubmit:  (values,{ resetForm }) => {
            const DATA = new FormData()
            DATA.append("id",props.itemID)
            DATA.append("description", values.description)
            changeDescItem(DATA).then(response => {
                alert(response);
                resetForm()
            })    
        },
    });

    const FormImg = useFormik({
        initialValues: {
            file: ""
          },
        onSubmit: (values,{ resetForm }) => {
            const DATA = new FormData()
            DATA.append("id",props.itemID)
            DATA.append("photo", values.file)
            changeImgItem(DATA).then(response => {
                alert(response);
                resetForm()
            });
        },
    });


    const FormChar = useFormik({
        initialValues: {
            
          },
        onSubmit: (values,{ resetForm })  => {
            const val = Object.entries(values);

            let arrChar = []
            let arrProps = []
            let idChar = []
            let idProps = []


            val.filter(vaiI => {
                if (vaiI[0][0] === 'c'){
                    arrChar.push(vaiI[1] + "&^")
                    let nameIdChar = vaiI[0]
                    let idChars = nameIdChar.substr(4)
                    idChar.push(idChars)
                }
            })

            val.filter(vaiI => {
                if (vaiI[0][0] === 'p'){
                    arrProps.push(vaiI[1] + "&^")
                    let nameIdProps = vaiI[0]
                    let idProp = nameIdProps.substr(5)
                    idProps.push(idProp)
                }
            })


            const DATA = new FormData()
            DATA.append("idRecord" , idChar)
            DATA.append("chars" , arrChar)
            DATA.append("props", arrProps)
            resetForm()
            changeCharItem(DATA).then(response => {
                alert(response);
                resetForm()
            });
        },
    })

    return (
        <main>
            <SureModal deleteCharUI={deleteCharUI} item={item} idDeleteChar={idDeleteChar} isOpen={isSureModalOpened} onAfterOpen={() => document.body.style.overflow = "hidden"} onAfterClose={() => document.body.style.overflow = "visible"} onClose={deleteChar} />
            <Section style={{ marginTop: 20 }}>
                <Container>
                        <div className={style.modalContainer}>
                            <div className={style.gridContainer}>
                                <div className={style.previewImage}>
                                    <img src={desctopImage.src} />
                                    <form onSubmit={FormImg.handleSubmit} className={style.table_p_input_img}>
                                        <button type="button" className={style.addPhoto}>
                                            <label htmlFor="file" className={style.labelPhoto}>
                                                <svg width="60" height="60" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M32.932 5.57797H27.52V5.02197C27.52 2.53797 25.504 0.521973 23.02 0.521973H14.413C11.928 0.521973 9.913 2.53797 9.913 5.02197V5.57797H4.5C2.015 5.57797 0 7.59297 0 10.078V26.412C0 28.896 2.015 30.912 4.5 30.912H32.934C35.419 30.912 37.434 28.896 37.434 26.412V10.078C37.432 7.59197 35.417 5.57797 32.932 5.57797ZM18.715 26.244C14.027 26.244 10.215 22.432 10.215 17.744C10.215 13.057 14.027 9.24397 18.715 9.24397C23.403 9.24397 27.215 13.056 27.215 17.744C27.215 22.432 23.402 26.244 18.715 26.244ZM23.215 17.744C23.215 20.223 21.195 22.244 18.715 22.244C16.235 22.244 14.215 20.223 14.215 17.744C14.215 15.264 16.235 13.244 18.715 13.244C21.195 13.244 23.215 15.264 23.215 17.744Z" fill="black" />
                                                </svg>
                                            </label>
                                            <input className={style.inputPhoto} id="file" name="file" type="file" 
                                                    onChange={(event) => {FormImg.setFieldValue("file", event.currentTarget.files[0]);}}
                                            />
                                        </button>
                                        <TargetButton
                                            style={{
                                                backgroundColor: '#49C155',
                                                color: 'white',
                                                border: 'none',
                                                marginLeft: 10,
                                                marginBottom: 10
                                            }}
                                            type="submit"
                                        >
                                            Изменить Фото
                                        </TargetButton>
                                    </form>
                                  
                               
                                </div>
                                <div className={style.descriptionBlock}>

                                    <div className={style.descriptionBlockInner}>



                                        <form onSubmit={FormName.handleSubmit}>
                                            <h2>
                                                {item[0].name}
                                            </h2>
                                            <input name="name" id="name" type="text" 
                                                    onChange={FormName.handleChange} placeholder={item[0].name} 
                                                    value={FormName.values.name} className={style.field_name} />
                                            <TargetButton
                                                style={{
                                                    backgroundColor: '#49C155',
                                                    color: 'white',
                                                    border: 'none',
                                                    marginRight: 10,
                                                    marginBottom: 10,
                                                    marginTop: 10
                                                }}
                                                type="submit"
                                            >
                                                Изменить Название
                                            </TargetButton>
                                        </form>



                                        <form className={style.form_desc} onSubmit={FormDesc.handleSubmit}>
                                            <p className={style.paragraph}>
                                                {item[1].description}
                                            </p>
                                            <textarea name="description" id="description" type="text" 
                                                        onChange={FormDesc.handleChange} placeholder={item[1].description} 
                                                        value={FormDesc.values.description} className={style.field_description} />
                                            <TargetButton
                                                style={{
                                                    backgroundColor: '#49C155',
                                                    color: 'white',
                                                    border: 'none',
                                                    marginRight: 10,
                                                    marginBottom: 10,
                                                }}
                                                type="submit"
                                            >
                                                Изменить Описание
                                            </TargetButton>
                                        </form>
                                            
                                    </div>
                                </div>    
                                <div className={style.charBlock}>
                                    <div className={style.tableContainer}>
                                        {
                                            item.map((i) => {
                                                if (i.characters === undefined || i.characters === undefined) {
                                                    return
                                                }
                                                return (
                                                    <form key={i.id} onSubmit={FormChar.handleSubmit} className={style.form_char}>
                                                        <div className={style.table_p_input}>
                                                            <div className={style.form_p_input}>
                                                                <p className={style.p_char}>{i.characters}</p>
                                                                <input name={`char${i.id}`} id={`char${i.id}`} onChange={FormChar.handleChange} placeholder={i.characters} type="text" className={style.input_char}/>
                                                            </div>
                                                            <div className={style.form_p_input}> 
                                                                <p className={style.p_char}>{i.props}</p>
                                                                <input type="text" id={`props${i.id}`} name={`props${i.id}`} onChange={FormChar.handleChange} placeholder={i.props} className={style.input_char}/>
                                                            </div> 
                                                        </div>
                                                        <div className={style.table_p_input}>
                                                            <TargetButton
                                                                style={{
                                                                    backgroundColor: '#49C155',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    marginBottom: 10,
                                                                    width: 'calc(43%)'
                                                                }}
                                                                type="submit"
                                                            >
                                                                Изменить Характеристику
                                                            </TargetButton>
                                                            <TargetButton
                                                                style={{
                                                                    backgroundColor: 'red',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    marginBottom: 10,
                                                                    width: 'calc(43%)'
                                                                }}
                                                                type="button"
                                                                onClick={() => {
                                                                    deleteChar(i)
                                                                    openSureModal(!isSureModalOpened)
                                                                }}
                                                            >
                                                                Удалить Характеристику
                                                            </TargetButton>
                                                        </div>
                                                    </form>

                                                )   
                                            })}
                                        <div>
                                        <TargetButton
                                            style={{
                                                backgroundColor: '#49C155',
                                                color: 'white',
                                                border: 'none',
                                                marginBottom: 10,
                                                width: 'calc(130%)'
                                            }}
                                            type="button"
                                            onClick={ () => { addNewField(item.itemID) }}
                                        >
                                            Добавить Характеристику
                                        </TargetButton>   
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                </Container>
            </Section>
        </main >
    )
}


function SureModal(props) {

    const FormDelChar = useFormik({
        initialValues: {
            
          },
        onSubmit: values => {
            const itemValueNew = props.item.filter(item => item !== props.idDeleteChar)
            props.deleteCharUI(itemValueNew)
            console.log(props.idDeleteChar.id);
            const DATA = new FormData()
            DATA.append("id", props.idDeleteChar.id)
            deleteChar(DATA).then(response => {
                alert(response);
                props.onClose()
            });   
        },
    });

    return (
        <Modal className={style.sureModal} {...props}>
            <form onSubmit={FormDelChar.handleSubmit}>
                <h3>
                    Вы уверены, что хотите удалить характеристику?
                </h3>
                <div>
                    <TargetButton style={{
                        marginTop: 20,
                        marginRight: 10,
                        }}
                        type="submit"
                    >
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
            </form>
            
        </Modal>
    )
}