import styled from "styled-components";
import Home_Animation from "../../components/home_animation";
import Title from "./title";

import { get_restaurant } from "../../API";
import { useEffect, useState } from "react";
import { Restaurant } from "../../API/interfaces";
import { Card } from "../../components/card";
import { useNavigate } from "react-router";
import HourglassLoader from "../../components/hourGlass";

const Home = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);
  const nav = useNavigate();

  const getRestaurant = async () => {
    const restaurantData = await get_restaurant();
    const nodesOnly = restaurantData.map(
      (item: { node: Restaurant }) => item.node
    );
    setRestaurant(nodesOnly);
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  const handleClickRestaurantButton = (id: string) => {
    nav("restaurant/" + id);
  };

  return (
    <Container>
      <SectionOne>
        <Title />
        <Home_Animation />
      </SectionOne>
      <SectionTwo>
        <h1>Restaurants</h1>
        <CardContainer>
          {restaurant.length === 0 ? (
            <section
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <h3>Carregando...</h3>
              <HourglassLoader />
            </section>
          ) : (
            restaurant.map((item, index) => (
              <Card
                key={index}
                objectId={item.objectId}
                name={item.name}
                rating={item.rating}
                deliveryTime={item.deliveryTime}
                image={item.image}
                location={item.location}
                topDishes={item.topDishes}
                NavToPage={handleClickRestaurantButton}
              />
            ))
          )}
        </CardContainer>
      </SectionTwo>
    </Container>
  );
};

export default Home;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  align-items: center;
  width: calc(100% - 2rem);
  padding: 12rem 1rem;
  overflow-x: hidden;

  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }
`;

const SectionOne = styled.section`
  display: flex;
  width: calc(100% - 24rem);
  padding: 0 12rem;
  justify-content: space-between;

  @media (max-width: 1450px) {
    width: 100%;
    padding: 0;
  }

  @media (max-width: 950px) {
    align-items: center;
    flex-direction: column;
  }
`;

const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24rem);
  padding: 0 12rem;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
    align-items: center;
  }
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  justify-content: center;

  @media (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
