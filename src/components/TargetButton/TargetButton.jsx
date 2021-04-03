// Style
import style from './TargetButton.module.scss'
import styled from 'styled-components'
// Smooth link
import AnchorLink from 'react-anchor-link-smooth-scroll'
// RRD
import { NavLink } from 'react-router-dom'



function TargetButton(props) {
    const TargetButtonBlock = styled.div`
        height: 50px;
        min-width: 200px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        color: ${props => props.theme.primary};
        background-color: transparent;
        cursor: pointer;
        border: 2px solid ${props => props.theme.primary};
        transition: .2s;
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0px 9px 29px rgba(0, 0, 0, .25);
            background-color: ${props => props.theme.primaryHover};
            color: white;
        }
    `;

    const TragetButtonOuter = styled.button`
        height: 50px;
        min-width: 200px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        text-align: center;
        border: 1px solid ${props => props.theme.primary};
        color: ${props => props.theme.primary};
        background-color: transparent;
        cursor: pointer;
        outline: none;
        transition: .2s;
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0px 9px 29px rgba(0, 0, 0, .25);
            background-color: ${props => props.theme.primaryHover};
            color: white;
        }
    `;

    const TargetAOuter = styled.a`
        height: 50px;
        min-width: 200px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        text-decoration: none;
        text-align: center;
        border: 1px solid ${props => props.theme.primary};
        color: ${props => props.theme.primary};
        background-color: transparent;
        cursor: pointer;
        outline: none;
        transition: .2s;
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0px 9px 29px rgba(0, 0, 0, .25);
            background-color: ${props => props.theme.primaryHover};
            color: white;
        }
    `;

    if (props.tag === 'a') {
        return (
            <TargetAOuter {...props}>
                    {props.children}
            </TargetAOuter>
        );
    }
    else if (props.tag === 'smooth') {
        return (
            <AnchorLink style={{textDecoration: 'none'}} {...props}>
                <TargetButtonBlock>
                    {props.children}
                </TargetButtonBlock>
            </AnchorLink>
        );
    }
    else if (props.tag === 'nav') {
        return (
            <NavLink style={{textDecoration: 'none'}} {...props}>
                <TargetButtonBlock>
                    {props.children}
                </TargetButtonBlock>
            </NavLink>
        );
    }
    return (
        <TragetButtonOuter
            {...props}
        >
            {props.children}
        </TragetButtonOuter>
    );
}



export default TargetButton