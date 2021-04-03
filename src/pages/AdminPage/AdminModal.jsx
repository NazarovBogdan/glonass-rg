// React
import React from 'react'
// Style
import style from './ItemPage.module.scss'

import {  useFormik } from 'formik'
import TargetButton from '../../components/TargetButton/TargetButton'
// API
import { setUser} from './../../components/API/API'



 export function SureModal(props) {

    

    const FormLogin = useFormik({
        initialValues: {
            login: "",
            pass: ""
          },
        onSubmit: (values,{ resetForm }) => {
            const DATA = new FormData()
            DATA.append("login",values.login)
            DATA.append("pass", values.pass)
            setUser(DATA).then(response => {
                props.setUserApi(response)
            });
        },
    });


    return (
        <div className={style.form_container}>
            <form onSubmit={FormLogin.handleSubmit} className={style.form_login}>
                <input name="login" id="login" type="text" 
                    onChange={FormLogin.handleChange} placeholder="login" 
                    value={FormLogin.values.name} className={style.field_login} />
                <input name="pass" id="pass" type="password" 
                    onChange={FormLogin.handleChange} placeholder="password" 
                    value={FormLogin.values.name} className={style.field_login} />
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
                    Войти
                </TargetButton>
            </form>

        </div>
        
    )
}
