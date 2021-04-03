import styled from 'styled-components';

const Container = (props) => {
    const OuterContainer = styled.div`
        max-width: 1160px;
        width: 100%;
        margin: 0 auto;
    `;

    const InnerContainer = styled.div`
        width: 100%;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    return (
        <OuterContainer {...props}>
            <InnerContainer>
                {props.children}
            </InnerContainer>
        </OuterContainer>
    );
}

export default Container