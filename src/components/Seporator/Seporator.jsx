// Style
import styled from 'styled-components';



function Seporator() {
    const SeporatorOuter = styled.hr`
        height: 4px;
        width: 75px;
        margin-bottom: 30px;
        @media screen and (max-width: 768px) {
            margin-bottom: 20px;
        }
        border: none;
        border-radius: 2px;
        background-color: ${props => props.theme.primary};
    `;

    return (
        <SeporatorOuter />
    );
}



export default Seporator;