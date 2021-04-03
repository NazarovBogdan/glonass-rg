// React
import { useEffect, useState, Fragment } from 'react'
// Style
import style from './CategoryPage.module.scss'
import styled from 'styled-components';
// AOS
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'
// RRD
import { useLocation, useParams, useHistory } from 'react-router-dom'
// Components
import Subtitle from './../../components/Subtitle/Subtitle'
import Section from './../../components/Section/Section'
import Container from './../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'
import TargetButton from '../../components/TargetButton/TargetButton'
import { PreviewMobile } from './../../components/PreviewMobile/PreviewMobile'
// API
import { setItemsCategory } from './../../components/API/API'



function CategoryItem(props) {
    useEffect(() => {
        Aos.init({ duration: 700 })
    })

    console.log(props);

    const test = (categoryItem, categoryItemName) => {
        props.setCategoryNameItem(categoryItem, categoryItemName)
    }

    const itemImage = new Image();
    itemImage.src = props.img;



    return (
        <div className={style.item} data-aos="fade">
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
                <TargetButton
                    tag="nav"
                    onClick={() => { test(props.categoryItem, props.name) }}
                    to={`/category/${props.categoryItem}/${props.name}`}
                    style={{
                        height: 40,
                        minWidth: 150
                    }}
                >
                    Подробнее
                </TargetButton>
            </div>
        </div>
    )
}

function CategoryPage(props) {
    const [categoryItem, setItems] = useState()

    const [isMobile, changeLoupe] = useState(false)

    const setLoupe = () => {
        if (window.screen.width <= 1024) {
            changeLoupe(true)
        }
        else {
            changeLoupe(false)
        }
    }

    useEffect(() => {
        Aos.init({ duration: 700 })

        const DATA = new FormData()
        DATA.append("category", props.category)
        setItemsCategory(DATA).then(response => {
            setItems(response.map(i => <CategoryItem setCategoryNameItem={props.setCategoryNameItem} categoryItem={props.category} key={i.id} img={i.img} name={i.name} />))
        })

        setLoupe()
    }, [])

    return (
        <main data-aos="fade">
            {isMobile &&
                <PreviewMobile heading={props.heading} />
            }
            {!isMobile &&
                <Container>
                    <Subtitle>
                        Оборудование
                    </Subtitle>
                    <Heading>
                        {props.heading}
                    </Heading>
                </Container>
            }
            <Section>
                <Container>
                    <div className={style.itemsContainer}>
                        {categoryItem}
                    </div>
                </Container>
            </Section>
        </main>
    )
}



export default CategoryPage