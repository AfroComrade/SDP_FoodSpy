import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaSearch, faSearch} from 'react-icons/fa';

function Search(){

    const [input, setInput] = useState("");
    const navigator = useNavigate();

    const submitController = (e) => {
        e.preventDefault();
        navigator("/searched/" + input)
    }

    return (
        <FormStyle onSubmit={submitController}>
            <div>
                <FaSearch></FaSearch>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            </div>
        </FormStyle>
    )
}

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