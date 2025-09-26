import styled from "styled-components";
import { Restaurant } from "../../API/interfaces"
import { delivery, green_star } from "../../constants/images";

interface CardProps extends Restaurant {
    NavToPage: (id: string) => void;
}

export const Card = ({
    objectId,
    name ,
    rating,
    deliveryTime,
    image,
    location,
    topDishes,
    NavToPage} : CardProps,
    ) => {
        return(
            <Container 
                onClick={() => NavToPage(objectId)}
            >
                <Imagem src={image}/>
                <h2 style={{
                    alignSelf:"flex-start",
                    fontWeight: 400
                }}>{name}</h2>
                <NewLine>
                    <p>{location}</p>
                    <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <img src={green_star} style={{width: '1rem'}}/>
                        <p>{rating}</p>
                    </div>
                </NewLine>
                <NewLine style={{marginTop: '1.5rem', justifyContent: 'center', alignItems:'center' ,gap: '5px'}}>
                    <img src={delivery} />
                    <p>{deliveryTime} mins</p>
                </NewLine>
            </Container>
        );

}

const Container = styled.button`
    display: flex;
    font-family: "Poppins", sans-serif;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 300px;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: var(--cor-card);
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    & p {
        margin: 0;
    }

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    }
`

const Imagem = styled.img`
    border-radius: 1rem;
    width: 170px;
    height: 120px;
`

const NewLine = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
`