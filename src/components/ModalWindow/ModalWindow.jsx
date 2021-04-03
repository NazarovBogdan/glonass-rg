// Style
import style from './ModalWindow.module.scss'
// Formik
import { Formik, Form, Field } from 'formik'
// Modal
import Modal from 'react-modal'
// Components
import Heading from './../../components/Heading/Heading'
import TargetButton from './../TargetButton/TargetButton'



function ModalWindow(props) {
    return (
        <Modal
            overlayClassName={style.overlay}
            className={style.modal}
            {...props}
            onAfterOpen={() => document.body.style.overflow = "hidden"} onAfterClose={() => document.body.style.overflow = "visible"}
        >
            <button
                className={style.closeButton}
                onClick={props.onClose}
            >
                <span>
                    +
                </span>
            </button>
            <h1 className={style.heading}>
                Заказать звонок
            </h1>
            <Formik
                initialValies={{
                    name: '',
                    phone: '',
                    text: ''
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={style.form}>
                        <Field type="name" className={style.input} placeholder="Имя..." />
                        <Field type="phone" className={style.input} placeholder="Телефон..." />
                        <Field type="text" component="textarea" className={style.textarea} placeholder="Комментарий..." />
                        <TargetButton type="submit" disabled={isSubmitting}>
                            Отправить
                        </TargetButton>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
}



export default ModalWindow