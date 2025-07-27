import styled from "styled-components";
import Home_Animation from "../../components/home_animation";
import Title from "./title";

import { get_restaurant } from "../../API";
import { useEffect, useState } from "react";
import { Restaurant } from "../../API/interfaces";
import { Card } from "../../components/card";

const Home = () => {
    const [ restaurant, setRestaurant ] = useState<Restaurant[]>([]);

    const getRestaurant = async() => {
        const restaurantData = await get_restaurant();
        const nodesOnly = restaurantData.map((item: { node: Restaurant }) => item.node);
        setRestaurant(nodesOnly);
    }

    useEffect(() => {
        getRestaurant();
    },[])
    
    return (
        <Container>
            <SectionOne>
                <Title />
                <Home_Animation />
            </SectionOne>
            <SectionTwo>
                <h1>Restaurants</h1>
                <CardContainer>
                    {
                        restaurant.map((item, index) => (
                                <Card
                                    key={index}
                                    objectId={item.objectId}
                                    name={item.name}
                                    rating={item.rating}
                                    deliveryTime={item.deliveryTime}
                                    image={item.image}
                                    location={item.location}
                                    topDishes={item.topDishes} />
                        )) 
                    }
                </CardContainer>
            </SectionTwo>
        </Container>
    );
}

export default Home;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    gap: 8rem;
    align-items: center;
    width: calc(100% - 36rem);
    padding: 12rem 18rem;
`

const SectionOne = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const SectionTwo = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const CardContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`