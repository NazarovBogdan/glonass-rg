// Style
import style from './Section.module.scss'



function Section(props) {
    return (
        <section
            className={style.section}
            {...props}
        >
            {props.children}
        </section>
    )
}



export default Section