import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Restaurant } from "../../API/interfaces";
import { get_restaurant_by_id } from "../../API";
import { green_star, percent_off, transparent_star } from "../../constants/images";
import { InputSearchDish } from "../../components/InputSearchDish";

const RestaurantPage = () => {
    const [ restaurant, setRestaurant ] = useState<Restaurant>();
    const { slug } = useParams();

    const callRestaurant = async () => {
        const response = await get_restaurant_by_id(slug);
        setRestaurant(response)
    }

    useEffect(() => {
        callRestaurant();
    },[slug])


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
                        <InputSearchDish />
                        <button style={{
                            width: '10rem',
                            border: 'none',
                            borderRadius: '1rem',
                            backgroundColor: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
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