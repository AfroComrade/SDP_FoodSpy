import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaSearch} from 'react-icons/fa';

//Creates the search bar that is used for finding recipes.

function Search(){

    const [input, setInput] = useState("");
    const navigator = useNavigate();

    const submitController = (e) => {
        e.preventDefault();
        navigator("/searched/" + input)
    }

    // For Sprint 2 we may change the way this bar works, as there are limitations that we are finding by doing it this way,
    // however more research is required.
    return (
        <FormStyle onSubmit={submitController}>
            <div>
                <FaSearch></FaSearch>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            </div>
        </FormStyle>
    )
}

// Sets up the display settings for the FormStyle, divs, inputs in a seperate area for tidier code.

const FormStyle = styled.form`
    margin: 0rem 30rem;
    position: relative;
    
    div{
        width: 100%;
        position: relative; 
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg{
        position: absolute; 
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white; 
    }`

export default Search;