import styled from "styled-components";
import { Splide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";
import keto from "../assets/images/keto.jpg"
import paleo from "../assets/images/paleo.jpg"
import vegan from "../assets/images/vegan.jpg"
import vegetarian from "../assets/images/vegetarian.jpg"

function ChooseDiet() {

    //Generates four different cards that give users an option for different Dietry Requirements 
    return (
        <>
            <div style={{
                paddingTop: '25px',
            }}>
            </div>
        
            <Wrapper>

                <h3>Dietry Requirements</h3>
                 {/* 
                 Sets up Cards for the screen, allowing for 4 cards to be displayed, and no arrows as there is only 4 cards displayed
                  */}
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    gap: "3rem",
                }}>
                    <Card>
                        <Link to={'/recipes_diet/vegan'}>
                            <img src={vegan} alt="Vegan spelt out with Scrabble Tiles"/>
                            <Gradient />
                        </Link>
                    </Card>

                    <Card>
                        <Link to={'/recipes_diet/vegetarian'}>
                            <img src={vegetarian} alt="Vegetarian spelt out with Scrabble Tiles"/>
                            <Gradient />
                        </Link>
                    </Card>

                    <Card>
                        <Link to={'/recipes_diet/ketogenic'}>
                            <img src={keto} alt="Keto spelt out with Scrabble Tiles"/>
                            <Gradient />
                        </Link>
                    </Card>

                    <Card>
                        <Link to={'/recipes_diet/paleo'}>
                        <img src={paleo} alt="Paleo spelt out with Scrabble Tiles"/>
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

export default ChooseDiet;