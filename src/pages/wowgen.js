import { useState } from 'react'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'
import Button from '@material-ui/core/Button'
import ModeButtons from '../components/ModeButtons'
import Return from '../components/Return'
import axios from 'axios'
import '../css/wowgen.css'
import CharacterDisplayWindow from '../components/CharacterDisplayWindow'

function Wowgen() {
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

    // Append a character to the character list
    function appendCharacter(character) {
        const char = character;
        console.log("append chars")
        console.log(char);
        setCharacters(characters.push(char));
        
    }

    // Clear all characters
    function clearCharacters() {
        setCharacters([]);
    }

    return ( 
        <div>
            <Return />
            <Container className="wowgen-header">
                <Header title="WoWGen" subtitle="A WoW Classic character generator" />
            </Container>
        
            <Container className="mode-buttons">
                <ModeButtons mode={mode} setMode={setMode}/>
            </Container>

            <Button text="Generate" onClick={generateCharacter} />
            <Button text="Clear" onClick={clearCharacters} />
            <CharacterDisplayWindow characters={characters} />

        </div>
   )
}

export default Wowgen;
