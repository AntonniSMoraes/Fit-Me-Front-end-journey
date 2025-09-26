import styled from "styled-components"

interface OrangeButtonProps {
    name?: string;
}

export const OrangeButton = ({name}:OrangeButtonProps) => {
    return(
        <Container>
            <p>{name}</p>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background: #FF7D1A;
    border-radius: 10px;
    cursor: pointer;

    & p {
        font-size: 18px;
        font-weight: 700;
        color: #FFFFFF;
    }
`