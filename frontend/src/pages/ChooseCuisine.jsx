import styled from "styled-components";
import { Link } from "react-router-dom";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import indianfood from '../assets/images/indianfood.jpg'
import thai from '../assets/images/thaifood.jpg'
import chinese from '../assets/images/chinesefood.jpg'
import korean from '../assets/images/koreanfood.jpg'

function ChooseCuisine() {

    // Generates the display using four cards to give users the option of different cuisine options
    return (
        <>
            <div style={{
                paddingTop: '25px',
            }}>
            </div>
            <Wrapper>
                {/*
                    Sets up four cards, with no arrows as they will all fit on the screen (only set up for full sized browser at this stage)
                */}

                <h3>Cuisine Options</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    gap: "3rem",
                }}>
                    <Card>
                        <Link to={'/recipes_cuisine/indian'}>
                            <img src={indianfood} alt="A variety of Indian Food"/>
                            <p>Indian</p>
                            <Gradient />
                        </Link>
                    </Card>

                    <Card>
                        <Link to={'/recipes_cuisine/thai'}>
                            <img src={thai} alt="A variety of Thai Food"/>
                            <p>Thai</p>
                            <Gradient />
                        </Link>
                    </Card>

                    <Card>
                        <Link to={'/recipes_cuisine/chinese'}>
                            <img src={chinese} alt="A dumpling bowl" />
                            <p>Chinese</p>
                            <Gradient />
                        </Link>
                    </Card>

                    <Card>
                        <Link to={'/recipes_cuisine/korean'}>
                        <img src={korean} alt="A variety of Korean Fried Dish"/>
                            <p>Korean</p>
                            <Gradient />
                        </Link>
                    </Card>

                </Splide>
            </Wrapper>

        </>
    );
};



// Creates the display options for a variety of things used, such as Card details, img, paragraphs etc.

const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    left: 1rem;

    img{
        border-radius: 2rem;
        position; absolute;
        width: 90%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%
        text-align: center;
        font-weight: 600;
        font-sizeL 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`


export default ChooseCuisine;