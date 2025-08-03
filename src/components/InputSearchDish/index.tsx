import styled from "styled-components";
import { search } from "../../constants/images";
import { useState } from "react";

interface setInput {
    setDishName: (info : String) => void;
}

export const InputSearchDish = ( { setDishName }: setInput) => {
    const [ value, setValue ] = useState<String>('');

    const handleSearch = (value : String) => {
        setDishName(value);
    }

    return(
        <>
            <Container
                type="text"
                placeholder="Search for dish"
                onChange={e => setValue(e.target.value)}
            />
            <SearchButton onClick={() => handleSearch(value)}>
                <img src={search} />
            </SearchButton>
        </>
    );
}

const Container = styled.input`
    border: none;
    border-radius: 1rem;
    width: calc(300px - 4rem);
    height: 50px;
    font-size: 1.4rem;
    padding: 0 2rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`

const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    border: none;
    position: absolute;
    cursor: pointer;
    width: 4.2rem;
    height: 4.2rem;
    left: 20.8rem;
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`