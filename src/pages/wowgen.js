import { useState } from 'react'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'
import Button from '../components/Button'
import ModeButtons from '../components/ModeButtons'
import Return from '../components/Return'

import '../css/wowgen.css'
import CharacterDisplayContainer from '../components/CharacterDisplayContainer'

function Wowgen() {
    
    

    

    // // Append a character to the character list
    // function appendCharacter(character) {
    //     const char = character;
    //     console.log("append chars")
    //     console.log(char);
    //     setCharacters(characters.push(char));
        
    // }

    

    return ( 
        <div>
            <Return />
            <Container className="wowgen-header">
                <Header title="WoWGen" subtitle="A WoW Classic character generator" />
            </Container>
        
            
            <CharacterDisplayContainer />


            
{/*             
            <div className="character-card">
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
</div> */}
        </div>
   )
}

export default Wowgen;
