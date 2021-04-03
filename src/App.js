// React
import React, { useState } from 'react'
// Style
import { ThemeProvider, createGlobalStyle } from 'styled-components'
// RRD
import {
    Route,
    Redirect,
    Switch,
    BrowserRouter,
} from 'react-router-dom'
// Components
import Header from './components/Header/Header'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Footer from './components/Footer/Footer'
import UserForm from './components/UserForm/UserForm'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// Pages
import MainPage from './pages/MainPage/MainPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import EquipmentPage from './pages/EquipmentPage/EquipmentPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import IndustryPage from './pages/IndustryPage/IndustryPage'
import AdminPage from './pages/AdminPage/AdminPage'
import ItemPage from './pages/ItemPage/ItemPage'
// Images
import bgImage from './images/content/main-bg.png'
import { SureModal } from './pages/AdminPage/AdminModal'



function App() {
    const [category, setNewName] = useState()
    const [category2, setNewNameCat] = useState()
    const [idUser, setUser] = useState(1) 

    
    const SetUserApi = (id) => {
        if (id === 1) {
            setUser(id) 
            return < Redirect to='/admin' />             
        } else {
            alert("не верный логин или пароль")
        }
    }

    function setName(categoryName, categoryName2) {
        setNewName(categoryName)
        setNewNameCat(categoryName2)
    };

    const [newCategoryItem, setNewCategoryItem] = useState()
    const [newCategoryItemName, setNewCategoryItemName] = useState()
    const [newCategoryItemDescription, setNewCategoryItemDescription] = useState()
    const [newCategoryItemCharacteristics, setNewCategoryItemCharacteristics] = useState()

    function setCategoryItemPar(
        categoryItem,
        categoryItemName,
        categoryItemDescription,
        categoryItemCharacteristics // [][]
    ) {
        setNewCategoryItem(categoryItem)
        setNewCategoryItemName(categoryItemName)
        setNewCategoryItemDescription(categoryItemDescription)
        setNewCategoryItemCharacteristics(categoryItemCharacteristics)
    };

    const itemPar = {
        category: newCategoryItem,
        name: newCategoryItemName,
        description: newCategoryItemDescription,
        characteristics: newCategoryItemCharacteristics
    };

    const GlobalStyle = createGlobalStyle`
        @font-face {
            font-family: Montserrat;
            src: url("./../fonts/Montserrat/Montserrat-Bold.ttf");
            font-weight: 600;
        }

        @font-face {
            font-family: Montserrat;
            src: url("./../fonts/Montserrat/Montserrat-SemiBold.ttf");
            font-weight: 400;
        }

        @font-face {
            font-family: Montserrat;
            src: url("./../fonts/Montserrat/Montserrat-Medium.ttf");
            font-weight: 300;
        }

        @font-face {
            font-family: SourceSansPro;
            src: url("./../fonts/SourceSansPro/SourceSansPro-Light.ttf");
            font-weight: 100;
        }

        @font-face {
            font-family: SourceSansPro;
            src: url("./../fonts/SourceSansPro/SourceSansPro-Bold.ttf");
            font-weight: 600;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
        }

        *::selection {
            background-color: #ff9900;
        }

        body {
            font-family: Montserrat, sans-serif;
            /* background-color: rgb(58, 58, 58); */
            background-image: url("${bgImage}");
            background-position: center top;
            background-repeat: repeat-y;
            background-size: 100% auto;
            background-color: ${props => props.theme.main}
        }

        button {
            font-family: Montserrat, sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
            font-size: 40px;
            line-height: 125%;
            color: ${props => props.theme.textColor}
        }

        p {
            font-family: Montserrat;
            font-weight: 300;
            font-size: 18px;
            line-height: 150%;
            color: ${props => props.theme.textColor}
        }
    `;

    const theme = {
        light: {
            primary: '#023872',
            primaryHover: '#023872',
            secondary: '#ff9900',
            main: 'white',
            textColor: 'black',
            cardsBg: '#023872',
            border: 'none'
        },
        dark: {
            primary: 'white',
            primaryHover: '#ff9900',
            secondary: '#ff9900',
            main: '#242424',
            textColor: 'white',
            cardsBg: '#242424',
            border: '3px solid white'
        }
    }

    const [appTheme, setTheme] = useState('light');

    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route path="/admin">
                        <AdminPage idUser={idUser} />
                    </Route>
                    <Route path="/adminmodal">
                        <SureModal setUserApi={SetUserApi} idUser={idUser} />
                    </Route>
                    <Route path="/">
                        <ThemeProvider appTheme={appTheme} theme={appTheme === 'light' ? theme.light : theme.dark}>
                            <GlobalStyle />
                            <Header />
                            <NavigationBar onChangeTheme={() => appTheme === 'light' ? setTheme('dark') : setTheme('light')} />
                            <Switch>
                                <Route exact path={`/category/${newCategoryItem}/${newCategoryItemName}`} >
                                    <ItemPage itemPar={itemPar} />
                                </Route>
                                <Route path="/equipment">
                                    <EquipmentPage categoryName={setName} />
                                </Route>
                                <Route path="/contacts">
                                    <ContactsPage />
                                </Route>
                                <Route path="/about">
                                    <AboutUsPage />
                                </Route>
                                <Route path="/industry">
                                    <IndustryPage />
                                </Route>
                                <Route path="/category">
                                    <CategoryPage setCategoryNameItem={setCategoryItemPar} category={category} heading={category2} />
                                </Route>
                                <Route path="/main">
                                    <MainPage />
                                </Route>
                                <Redirect to="/main" />
                            </Switch>
                            <UserForm />
                            <Footer />
                        </ThemeProvider>
                    </Route>
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
}



export default App