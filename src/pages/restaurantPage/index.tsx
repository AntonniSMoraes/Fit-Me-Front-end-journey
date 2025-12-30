import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Restaurant } from "../../API/interfaces";
import { get_restaurant_by_id } from "../../API";
import { DishInfo } from "../../components/dishInfo";
import { Cart } from "../../components/cart";
import HourglassLoader from "../../components/hourGlass";
import { TopPageBar } from "./topPageBar";

const RestaurantPage = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [dishName, setDishName] = useState<string | undefined>();
  const { slug } = useParams();
  let showDish = restaurant?.topDishes.filter(
    (dish) => dish.name.toLowerCase() === dishName?.toLowerCase()
  );

  const callRestaurant = async () => {
    const response = await get_restaurant_by_id(slug);
    setRestaurant(response);
    setDishName(response.topDishes[0].name);
  };

  useEffect(() => {
    callRestaurant();
  }, [slug]);

  return (
    <Container>
      {restaurant?.topDishes.length === 0 ?
       (
        <section
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <h3>Carregando...</h3>
          <HourglassLoader />
        </section>
      ) : (
        <>
          <TopPageBar restaurant={restaurant} setDishName={setDishName} />
          <DishList>
            <div
              style={{
                flexDirection: "column",
                borderRight: "1px solid",
                borderColor: "gray",
              }}
            >
              <p style={{ color: "var(--cor-laranja)", margin: "0" }}>
                Recommended
              </p>
              {restaurant &&
                restaurant.topDishes.map((dish, index) => (
                  <button
                    key={index}
                    style={{ color: "var(--cor-cinza40)" }}
                    onClick={() => {
                      setDishName(dish.name);
                    }}
                  >
                    {dish.name}
                  </button>
                ))}
            </div>
            {showDish !== undefined && showDish[0] !== undefined ? (
              <DishInfo
                name={showDish[0].name}
                description={showDish[0].description}
                image={showDish[0].image}
                price={showDish[0].price}
              />
            ) : (
              <p style={{ padding: "1rem", alignSelf: "center" }}>
                Prato não encontrado
              </p>
            )}
            <Cart />
          </DishList>
        </>
      )}
    </Container>
  );
};

export default RestaurantPage;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DishList = styled.section`
  display: flex;
  padding: 6rem 1rem;
  gap: 3rem;

  & div {
    display: flex;
    gap: 10px;
    padding: 0 1rem;
  }

  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-align: start;
    font-size: 1rem;
  }
`;
