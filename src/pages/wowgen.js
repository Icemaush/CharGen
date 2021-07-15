import { useState } from 'react'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'
import Button from '../components/Button'
import Info from '../components/Info'
import Icon from '../components/Icon'
import Image from '../components/Image'
import ModeButtons from '../components/ModeButtons'
import axios from 'axios'
import '../css/wowgen.css'

function Wowgen() {
    // Character state
    const [character, setCharacter] = useState({
        faction: '',
        race: '',
        gender: '',
        class: '',
        spec: '',
        factionIconUrl: 'wow_logo.png',
        raceIconUrl: 'wow_logo.png',
        classIconUrl: 'wow_logo.png',
        specIconUrl: 'wow_logo.png',
        previewImageUrl: 'wow_logo.png'
    });

    // Send request to server to generate a random character
    function generateCharacter() {
        axios.get('https://chargen-server.herokuapp.com/wow/generate-character').then(res => {
            const character = res.data.data;
            setCharacter(character);
        });
    }

    return ( 
        <div>
            <Container className="header">
                <Header title="WoWGen" subtitle="A WoW Classic character generator" />
            </Container>
            <Container className="mode-buttons">
                <ModeButtons />
            </Container>
            

            <Button text="Generate" onClick={generateCharacter}/>
            <div className="info">
                <Info faction={character.faction} race={character.race} gender={character.gender} class={character.class} spec={character.spec} />
                <div className="imgcon">
                    <Icon type="faction_image" url={character.factionIconUrl} width="64" height = "64"/>
                    <Icon type="race_image" url={character.raceIconUrl} width="64" height = "64"/>
                    <Icon type="class_image" url={character.classIconUrl} width="64" height = "64"/>
                    <Icon type="spec_image" url={character.specIconUrl} width="64" height = "64"/>
                </div>
                <div className="char-preview">
                    <Image type="char_preview" url={character.previewImageUrl} />
                </div>
            </div>
        </div>
   )
}

export default Wowgen;
