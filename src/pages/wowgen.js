import { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Info from '../components/Info'
import Icon from '../components/Icon'
import Image from '../components/Image'
import DarkModeSwitch from '../components/DarkModeSwitch'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { lightTheme, darkTheme } from "../components/Themes"
import  {useDarkMode} from "../components/useDarkMode"
import axios from 'axios'
import '../css/wowgen.css'

function App() {
    // Dark Mode
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    // Character state
    const [character, setCharacter] = useState({
        faction: '',
        race: '',
        gender: '',
        class: '',
        spec: '',
        factionIconUrl: require('./images/wow_logo.png').default,
        raceIconUrl: require('./images/wow_logo.png').default,
        classIconUrl: require('./images/wow_logo.png').default,
        specIconUrl: require('./images/wow_logo.png').default,
        previewImageUrl: require('./images/wow_logo.png').default
    });

    // Send request to server to generate a random character
    function generateCharacter() {
        axios.get('https://wowgen-server.herokuapp.com/generate-character').then(res => {
            const character = res.data.data;
            setCharacter(character);
        });
    }

    return ( 
        <ThemeProvider theme={themeMode}>
            <>
            <GlobalStyles/>
            <DarkModeSwitch theme={theme} toggleTheme={themeToggler} />
                <div className = "container">
                    <Header title="WoWGen" subtitle="A WoW Classic character generator" />
                    <Button text="Generate" onClick={generateCharacter}/>
                    <div className="info">
                        <Info faction={character.faction} race={character.race} gender={character.gender} class={character.class} spec={character.spec} />
                        <div className="imgcon">
                            <Icon type="faction_image" url={character.factionIconUrl} />
                            <Icon type="race_image" url={character.raceIconUrl} />
                            <Icon type="class_image" url={character.classIconUrl} />
                            <Icon type="spec_image" url={character.specIconUrl}/>
                        </div>
                        <div className="char-preview">
                            <Image type="char_preview" url={character.previewImageUrl} />
                        </div>
                    </div>
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
