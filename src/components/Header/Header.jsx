// React
import React, {
    useState,
    Fragment
} from 'react'
// Style
import styled from 'styled-components'
// RRD
import { NavLink } from 'react-router-dom'
// Components
import TargetButton from './../TargetButton/TargetButton'
import TargetLink from './../TargetLink/TargetLink'
import Container from './../Container/Container'
// Icons
import logo from './../../images/logo/logotype.svg';
import searchIcon from "./../../images/icons/loupe-icon.svg";
import { useFormik } from 'formik'



function Header(props) {
    const OuterHeader = styled.header`
        height: 50px;
        margin: 20px 0;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1024px) {
            width: 100%;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 1;
            margin: 0;
        }
    `;

    const HeaderContainer = styled.div`
        max-width: 1140px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    `;

    const HeaderLogo = styled.div`
        max-width: 250px;
        & a {
            display: flex;
            text-decoration: none;
            align-items: center;
        };
        & img {
            margin-right: 10px;
            @media screen and (max-width: 1024px) {
                height: 30px;
            };
            display: ${props => props.display ? "none" : "block"};
        }
        & div {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        };
        & h1 {
            font-size: 20px;
            color: ${props => props.theme.primary};
        };
        & p {
            font-size: 12px;
            color: ${props => props.theme.textColor};
        };
        & h1, & p {
            @media screen and (max-width: 1024px) {
                display: none;
            };
        };
    `;

    const HeaderContent = styled.div`
        width: calc(100% - 270px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 1024px) {
            display: none;
        }
    `;

    const SearchField = styled.input`
        height: 50px;
        width: 300px;
        padding-left: 50px;
        position: relative;
        background-color: #e9e9e9;
        border: none;
        border-radius: 25px;
        outline: none;
        background-image: url("${searchIcon}");
        background-repeat: no-repeat;
        background-position: 17px center;
    `;

    const Burger = styled.div`
        height: 25px;
        width: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 11;
        position: absolute;
        right: 10px;
        @media screen and (min-width: 1024px) {
            display: none;
        };
    `;

    const BurgerItem = styled.div`
        transition: .2s;
        height: 5px;
        background-color: white;
        border-radius: 3px;
        border: 1px solid #023872;
        transform: ${props => props.active && props.role === 'roted1' ? 'translateY(10px) rotate(-45deg)' : null};
        transform: ${props => props.active && props.role === 'roted2' ? 'translateY(-10px) rotate(45deg)' : null};
        display: ${props => props.active && props.role === 'snitch' ? 'none' : 'block'};
    `;

    const NavigationContainer = styled.nav`
        height: 100vh;
        width: 100vw;
        padding: 10px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${props =>  props.theme.primary};
    `;

    const MavigationList = styled.ul`
        padding-top: 50px;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        & li {
            width: 100%;
            padding: 20px 0;
        };
        & a {
            color: white;
            text-decoration: none;
        }
    `;

    const NavigationButtons = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const [isBurgerOpened, handleBurger] = useState(false)
    const openBurger = () => {
        if (isBurgerOpened) {
            document.body.style.overflow = 'scroll'
            handleBurger(false)
        }
        else {
            document.body.style.overflow = 'hidden'
            handleBurger(true)
        }
        console.log(isBurgerOpened);
    }

    const searchForm = useFormik({
        initialValues: {
            searchtext: ""
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <Fragment>
            {isBurgerOpened &&
                <NavigationContainer {...props}>
                    <div>
                        <form action="">
                            <SearchField type="search" />
                        </form>
                        <MavigationList>
                            <li>
                                <NavLink
                                    to="/main"
                                    onClick={openBurger}
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={openBurger}
                                >
                                    О компании
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/industry"
                                    onClick={openBurger}
                                >
                                    Отраслевые решения
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/equipment"
                                    onClick={openBurger}
                                >
                                    Оборудование
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contacts"
                                    onClick={openBurger}
                                >
                                    Контакты
                                </NavLink>
                            </li>
                        </MavigationList>
                    </div>
                    <NavigationButtons>
                        <TargetButton style={{
                            border: '1px solid white',
                            color: 'white',
                            marginBottom: 20,
                            minWidth: 100,
                            width: 180
                        }} tag="a" href="https://hosting.wialon.com/" target="_blank">
                            Демо wialon
                        </TargetButton>
                        <TargetButton style={{
                            border: '1px solid white',
                            color: 'white',
                            marginBottom: 20,
                            minWidth: 100,
                            width: 180
                        }} tag="a" href="https://online.omnicomm.ru/" target="_blank">
                            Демо omnicomm
                        </TargetButton>
                    </NavigationButtons>
                </NavigationContainer>
            }
            <OuterHeader>
                <Container>
                    <HeaderContainer>
                        <HeaderLogo display={isBurgerOpened} {...props}>
                            <NavLink to="/main">
                                <img src={logo} alt="Логотип" />
                                <div>
                                    <h1>
                                        Глонасс-Регионы
                                    </h1>
                                    <p>
                                        Работаем по всей России
                                    </p>
                                </div>
                            </NavLink>
                        </HeaderLogo>
                        <HeaderContent>
                            <form onSubmit={searchForm.handleSubmit}>
                                <SearchField name="searchtext"  id="searchtext" onChange={searchForm.handleChange} type="search"/>
                            </form>
                            <TargetButton tag="a" href="https://hosting.wialon.com/" target="_blank">
                                Демо wialon
                            </TargetButton>
                            <TargetButton tag="a" href="https://online.omnicomm.ru/" target="_blank">
                                Демо omnicomm
                            </TargetButton>
                            <TargetLink tag="a" href="tel:+78633226162">
                                +7 863 322-61-62
                            </TargetLink>
                        </HeaderContent>
                        <Burger onClick={openBurger}>
                            <BurgerItem active={isBurgerOpened} role="roted1" />
                            <BurgerItem active={isBurgerOpened} role="snitch" />
                            <BurgerItem active={isBurgerOpened} role="roted2" />
                        </Burger>
                    </HeaderContainer>
                </Container>
            </OuterHeader>
        </Fragment>

    )
}

export default Header