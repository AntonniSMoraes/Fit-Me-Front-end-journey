import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Restaurant } from "../../API/interfaces";
import { get_restaurant_by_id } from "../../API";
import { green_star, percent_off, transparent_star } from "../../constants/images";
import { InputSearchDish } from "../../components/InputSearchDish";
import { DishInfo } from "../../components/dishInfo";

const RestaurantPage = () => {
    const [ restaurant, setRestaurant ] = useState<Restaurant>();
    const [ dishName, setDishName ] = useState<String | undefined>();
    const { slug } = useParams();
    let showDish = restaurant?.topDishes.filter(dish => dish.name.toLowerCase() === dishName?.toLowerCase());

    const callRestaurant = async () => {
        const response = await get_restaurant_by_id(slug);
        setRestaurant(response)
        setDishName(response.topDishes[0].name)
    }

    useEffect(() => {
        callRestaurant();
    },[slug])

    console.log(dishName)


    return(
        <Container>
            <GrayStrip>
                <div>
                    <img src={restaurant?.image}
                        style={{
                            width: '300px',
                            height: '250px',
                            borderRadius: '1rem'
                        }}
                    />
                </div>
                <div style={{display: 'flex'}}>
                    <h1 style={{alignSelf: 'flex-start'}}>{restaurant?.name}</h1>
                    <p>{restaurant?.location}</p>
                    <div style={{flexDirection: 'row', gap: '1rem'}}>
                       
                        <div  style={{borderRight: '1px solid'}}>
                            <div style={{flexDirection: 'row', gap: '.5rem'}}>
                                <img src={green_star}/>
                                <p style={{margin: 0}}>{restaurant?.rating}</p>
                            </div>
                            <p style={{marginTop: '10px'}}>100+ ratings</p>
                        </div>

                        <div  style={{borderRight: '1px solid'}}>
                            <p style={{margin: 0}}>{restaurant?.deliveryTime} mins</p>
                            <p style={{marginTop: '12px'}}>Delivery Time</p>
                        </div>

                        <div>
                            <p style={{margin: 0}}>₹200</p>
                            <p style={{marginTop: '12px'}}>Cost for two</p>
                        </div>

                    </div>
                    <div style={{
                        flexDirection: 'row',
                        gap: '2rem',
                        top: '5rem',
                        position: 'relative'
                    }}>
                        <InputSearchDish setDishName={setDishName}/>
                        <button style={{
                            width: '10rem',
                            border: 'none',
                            borderRadius: '1rem',
                            backgroundColor: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            gap: '.5rem'
                        }}>
                            <img src={transparent_star} />
                            <p>Favourite</p>
                        </button>
                    </div>
                </div>
                <div style={{
                    border: '2px dashed var(--cor-laranja)',
                    borderRadius: '1rem',
                    padding: '0 0 1rem 2rem'
                }}>
                    <h1 style={{color: 'var(--cor-laranja)'}}>Offers</h1>
                    <div style={{flexDirection: 'row', gap: '.8rem'}}>
                        <img src={percent_off}/>
                        <p>50% off up to ₹100 | Use code TRYNEW</p>
                    </div>
                    <div style={{flexDirection: 'row', gap: '.8rem'}}>
                        <img src={percent_off}/>
                        <p>20% off | Use code PARTY</p>
                    </div>
                </div>
            </GrayStrip>
            <DishList>
                <div
                    style={{
                        flexDirection: 'column',
                        borderRight: '1px solid',
                        borderColor: 'gray'
                }}>
                    <p style={{color: 'var(--cor-laranja)', margin: '0'}}>Recommended</p>
                    {
                        restaurant && restaurant.topDishes.map((dish, index) => 
                            <button key={index}
                                style={{color: 'var(--cor-cinza40)'}}
                                onClick={() => {setDishName(dish.name)}}
                            >{dish.name}</button>
                        )
                    }
                </div>
                {showDish && 
                    <DishInfo
                        name={showDish[0].name}
                        description={showDish[0].description}
                        image={showDish[0].image}
                        price={showDish[0].price}
                    />
                }
            </DishList>
        </Container>
    );
}

export default RestaurantPage;

const Container = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const GrayStrip = styled.section`
    display: flex;
    width: calc(100% - 20rem);
    background-color: var(--cor-cinza80);
    color: white;
    align-items: center;
    padding: 2rem 10rem;
    gap: 5rem;
    justify-content: space-around;

    & div {
        display: flex;
        width: 100%;
        flex-direction: column;
        font-weight: 500;
    }

    & img {
        width: 20px;
    }
`

const DishList = styled.section`
    display: flex;
    padding: 6rem 1rem;

    & div{
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
`