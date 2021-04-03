// Style
import styled from 'styled-components';
// RRD
import { NavLink } from 'react-router-dom'
// React
import React, {
    useEffect,
    useState
} from 'react'



function NavigationBar(props) {
    const [boxShadow, setShadow] = useState('none')

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShadow('0 0 5px grey')
        }
        else {
            setShadow('none')
        }
    }

    const NavigationBarOuter = styled.nav`
        height: 50px;
        width: 800px;
        margin: 0 auto 20px;
        @media screen and (max-width: 1024px) {
            display: none;
        }
        position: sticky;
        top: 30px;
        z-index: 1;
        background-color: white;
        box-shadow: ${boxShadow};
        border-radius: 25px;
        transition: 0.2s;
    `;

    const NavigationLinksContainer = styled.ul`
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        padding: 0 5px 0 30px;
        & li a {
            text-decoration: none;
            color: black;
            font-weight: 100;
            transition: 0.2s;
        }
        & li .selected {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: ${props => props.theme.primaryHover};
            &::before {
                content: "";
                height: 2px;
                width: 34px;
                display: block;
                position: absolute;
                bottom: 8px;
                background-color: ${props => props.theme.primaryHover};
                border-radius: 1px;
            };
        }
    `;

    const CheckField = styled.input`
        height: 0;
        width: 0;
        visibility: hidden;
        &:checked + label {
            background: rgb(46, 46, 46);
        };
        &:checked + label:after {
            left: calc(100% - 5px);
            transform: translateX(-100%);
        }
    `;

    const CheckFieldLabel = styled.label`
        cursor: pointer;
        text-indent: -9999px;
        width: 60px;
        height: 40px;
        background: #ff9900;
        display: inline-block;
        border-radius: 100px;
        position: relative;
        transition: .2s;
        @media screen and (max-width: 1120px) {
            display: none;
        };
        &::after {
            content: "";
            position: absolute;
            bottom: 5px;
            left: 5px;
            width: 30px;
            height: 30px;
            background: white;
            border-radius: 25px;
            transition: .2s;
        };
    `;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <NavigationBarOuter>
            <NavigationLinksContainer>
                <li>
                    <NavLink
                        activeClassName="selected"
                        to="/main"
                    >
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="selected"
                        to="/about"
                    >
                        О компании
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="selected"
                        to="/industry"
                    >
                        Отраслевые решения
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="selected"
                        to="/equipment"
                    >
                        Оборудование
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="selected"
                        to="/contacts"
                    >
                        Контакты
                    </NavLink>
                </li>
                <li>
                    <CheckField type="checkbox" id="switch" onClick={props.onChangeTheme} />
                    <CheckFieldLabel for="switch">Toggle</CheckFieldLabel>
                </li>
            </NavigationLinksContainer>
        </NavigationBarOuter>
    )
}



export default NavigationBar