import styled from "styled-components";
import Home_Animation from "../../components/home_animation";
import Title from "./title";

const Home = () => {
    return (
        <Container>
            <SectionOne>
                <Title />
                <Home_Animation />
            </SectionOne>
            <SectionTwo>
                <h1>Restaurants</h1>
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
    width: 100%;
`