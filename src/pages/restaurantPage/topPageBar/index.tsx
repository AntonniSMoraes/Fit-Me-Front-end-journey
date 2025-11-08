import styled from "styled-components";
import {
  green_star,
  percent_off,
  transparent_star,
} from "../../../constants/images";
import { SearchInput } from "../../../components/searchInput";
import { Restaurant } from "../../../API/interfaces";
import { useWindowSize } from "../../../components/customHooks/useWindowSize";

interface TopPageBarProps {
  restaurant: Restaurant | undefined;
  setDishName: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const TopPageBar = ({ restaurant, setDishName }: TopPageBarProps) => {
  const window = useWindowSize().width;

  return (
    <>
      <StripContainer>
        <Fraction
          style={{
            flexDirection: window > 750 ? "row" : "column",
            alignItems: window > 750 && window < 1100 ? "flex-end" : "center",
            gap: "2rem",
          }}
        >
          <Fraction>
            <img
              src={restaurant?.image}
              style={{
                width: "300px",
                height: "250px",
                borderRadius: "1rem",
              }}
            />
          </Fraction>
          <Fraction
            style={{
              alignItems: window > 750 ? "flex-start" : "center",
            }}
          >
            <h1 style={{ margin: "0" }}>{restaurant?.name}</h1>
            <p>{restaurant?.location}</p>
            <article style={{ display: "flex" }}>
              <Fraction>
                <FractionColumn>
                  <img src={green_star} style={{ width: "28px" }} />
                  <p style={{ margin: 0 }}>{restaurant?.rating}</p>
                </FractionColumn>
                <p style={{ marginTop: "10px", marginBottom: "0" }}>
                  100+ ratings
                </p>
              </Fraction>
              <Division />
              <Fraction>
                <p style={{ margin: 0 }}>{restaurant?.deliveryTime} mins</p>
                <p style={{ marginTop: "12px" }}>Delivery Time</p>
              </Fraction>
              <Division />
              <Fraction>
                <p style={{ margin: 0 }}>₹200</p>
                <p style={{ marginTop: "12px" }}>Cost for two</p>
              </Fraction>
            </article>
          </Fraction>
        </Fraction>
        <Fraction>
          <OffersContainer>
            <h1 style={{ color: "var(--cor-laranja)" }}>Offers</h1>
            <div>
              <img src={percent_off} />
              <p>50% off up to ₹100 | Use code TRYNEW</p>
            </div>
            <div>
              <img src={percent_off} />
              <p>20% off | Use code PARTY</p>
            </div>
          </OffersContainer>
        </Fraction>
      </StripContainer>
      <article
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          top: "-1.5rem",
          gap: "2rem",
          position: "relative",
        }}
      >
        <SearchInput
          text={"Search for dish"}
          border={false}
          setSearch={setDishName}
        />
        <FavoriteButton>
          <img src={transparent_star} />
          <p>Favourite</p>
        </FavoriteButton>
      </article>
    </>
  );
};

const StripContainer = styled.section`
  display: flex;
  width: calc(100% - 20rem);
  padding: 2rem 10rem;
  flex-wrap: wrap;
  background-color: var(--cor-cinza80);
  color: white;
  justify-content: space-around;

  @media (max-width: 1500px) {
    width: calc(100% - 10rem);
    padding: 2rem 5rem;
  }

  @media (max-width: 1300px) {
    width: 100%;
    padding: 2rem 0;
  }

  @media (max-width: 1100px) {
    align-items: center;
    gap: 2rem;
    flex-direction: column;
  }
`;

const Fraction = styled.article`
  display: flex;
  flex-direction: column;
`;

const Division = styled.div`
  padding: .1rem;
  background-color: white;
  height: 60px;
  margin: 0 3rem;
  
  @media(max-width: 1260px) {
    margin: 0 1rem;
  }
`;

const FractionColumn = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FavoriteButton = styled.button`
  display: flex;
  width: 10rem;
  gap: 0.5rem;
  border: none;
  border-radius: 1rem;
  background-color: white;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const OffersContainer = styled.article`
  border: 2px dashed var(--cor-laranja);
  border-radius: 1rem;
  padding: 1rem 2rem 2rem 2rem;

  & div {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
  }

  //   @media (max-width: 1150px) {
  //     border: 2px dashed var(--cor-laranja);
  //     border-radius: 1rem;
  //     padding: 0 .5rem;

  //     & div {
  //       display: flex;
  //       flex-direction: row;
  //       gap: 0.4rem;
  //     }
  //   }
`;
