import WowCharacterCard from "./WowCharacterCard"
import styled from 'styled-components'
import { useState } from "react";
import ModeButtons from "./ModeButtons";
import GenerateContainer from "./GenerateContainer";
import BuildContainer from "./BuildContainer";
import Button from './Button'
import axios from 'axios'

const CharacterDisplayContainer = styled.div`
    display: flex;
    position: relative;
    top: 100px;
`;


const CharacterDisplayWindow = () => {
    const [mode, setMode] = useState("generate");
    const [characters, setCharacters] = useState([
    ]);

    // Send request to server to generate a random character
    function generateCharacter() {
        axios.get('https://chargen-server.herokuapp.com/wow/generate-character').then(res => {
            const character = res.data.data;
            console.log("generate chars")
            console.log(character);
            setCharacters([character]);
            //appendCharacter(character);
        });
    }

    // Clear all characters
    function clearCharacters() {
        setCharacters([]);
    }

    return (
        <CharacterDisplayWindowContainer>
            <ModeButtons mode={mode} setMode={setMode}/>
            <Button text="Generate" onClick={generateCharacter} />
            <Button text="Clear" onClick={clearCharacters} />
            { mode === 'generate' ? <GenerateContainer characters={characters}/> : <BuildContainer />  }
        </CharacterDisplayWindowContainer>
    )
}

export default CharacterDisplayWindow
