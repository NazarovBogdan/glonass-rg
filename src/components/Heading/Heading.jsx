// Style
import style from './Heading.module.scss'



function Heading(props) {
    return(
        <h2
            className={style.heading}
            {...props}
        >
            {props.children}
        </h2>
    )
}



export default Heading