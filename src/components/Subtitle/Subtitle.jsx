// Style
import style from './Subtitle.module.scss'



function Subtitle(props) {
    return (
        <p
            className={style.subtitle}
            {...props}
        >
            {props.children}
        </p>
    )
}



export default Subtitle