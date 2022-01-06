import { useState } from 'react'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'
import Button from '@material-ui/core/Button'
import ModeButtons from '../components/ModeButtons'
import Return from '../components/Return'
import axios from 'axios'
import '../css/wowgen.css'
import CharacterDisplayWindow from '../components/CharacterDisplayWindow'
import { Modal } from '@material-ui/core'

function Wowgen() {
    const [mode, setMode] = useState("generate");
    const [characters, setCharacters] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    //displaying modal
    function buildModalOpen () {
        setOpenModal(true);
    }
    //close modal
    function buildModalClosed () {
        setOpenModal(false);
    }

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
    async function generateParty () {
        const newChars = [];
        await axios.get('https://chargen-server.herokuapp.com/wow/generate-character').then(res => {
            const character = res.data.data;
            console.log("generate chars")
            console.log(character);
            newChars.push(character)
            console.log(newChars)
            
        });
        await axios.get('https://chargen-server.herokuapp.com/wow/generate-character').then(res => {
            const character = res.data.data;
            console.log("generate chars")
            console.log(character);
            newChars.push(character)
            console.log(newChars)
        });
        await axios.get('https://chargen-server.herokuapp.com/wow/generate-character').then(res => {
            const character = res.data.data;
            console.log("generate chars")
            console.log(character);
            newChars.push(character)
            console.log(newChars)
        });
        await axios.get('https://chargen-server.herokuapp.com/wow/generate-character').then(res => {
            const character = res.data.data;
            console.log("generate chars")
            console.log(character);
            newChars.push(character)
            console.log(newChars)
        });
        await axios.get('https://chargen-server.herokuapp.com/wow/generate-character').then(res => {
            const character = res.data.data;
            console.log("generate chars")
            console.log(character);
            newChars.push(character)
            console.log(newChars)
        });
        setCharacters(newChars);
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
                <ModeButtons mode={mode} setMode={setMode} generateCharacter={generateCharacter} generateParty={generateParty} clearCharacters={clearCharacters} buildModal={buildModalOpen}/>
            </Container>

            <CharacterDisplayWindow characters={characters} />
            <Modal open={openModal}>
                <Modal.Header>
                        Build your own Character
                </Modal.Header>
                123
            </Modal>

        </div>
   )
}

export default Wowgen;
