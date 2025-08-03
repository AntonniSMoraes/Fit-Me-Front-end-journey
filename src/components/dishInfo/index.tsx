import styled from "styled-components"
import { Dish } from "../../API/interfaces"

export const DishInfo = (props : Dish) => {
    return (
        <Container>
            <div style={{
                flexDirection: 'column',
            }}>
                <h3>{props.name}</h3>
                <h5>₹{props.price}</h5>
                <p>{props.description}</p>
            </div>
            <img src={props.image} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    & img {
        width: 160px;
        height: 160px;
        border-radius: 1rem;
    }

    & h3 {
        margin-bottom: 0;
    }

    & h5 {
        margin: 0;
    }

    & p {
        margin: 0;
        color: var(--cor-cinza40)
    }
`