// Style
import style from './Paragraph.module.scss'



function Paragraph(props) {
    return(
        <p
            className={style.paragraph}
            {...props}
        >
            {props.children}
        </p>
    )
}



export default Paragraph