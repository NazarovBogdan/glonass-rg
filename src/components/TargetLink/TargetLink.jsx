// Style
import styled from 'styled-components'
// RRD
import { Link } from 'react-router-dom'



function TargetLink(props) {
    const LinkOuter = styled.div`
        color: ${props => props.theme.textColor};
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
        transition: .2s;
        &:hover {
            color: ${props => props.theme.primaryHover}
        }
    `;

    if (props.tag == 'a') {
        return (
            <a {...props} style={{ textDecoration: 'none' }}>
                <LinkOuter>
                    {props.children}
                </LinkOuter>
            </a>
        )
    }
    return (
        <Link
            to={props.to}
            style={{ textDecoration: 'none' }}
            {...props}
        >
            <LinkOuter>
                {props.children}
            </LinkOuter>
        </Link>
    )
}



export default TargetLink