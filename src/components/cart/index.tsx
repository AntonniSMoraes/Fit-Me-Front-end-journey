import styled from "styled-components"
import { OrangeButton } from "../orangeButton";

export const Cart = () => {
    return(
        <Container>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Cart</p>
                <p>0 items</p>
            </div>
            <OrangeButton name="Checkout"/>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    & p {
        font-size: 24px;
        font-weight: 500;
    }
`