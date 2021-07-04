import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Info from './components/Info'
import Image from './components/Image'
import DarkModeSwitch from './components/DarkModeSwitch'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import  {useDarkMode} from "./components/useDarkMode"

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
        factionImg: require('./images/wow_logo.png').default,
        raceImg: require('./images/wow_logo.png').default,
        classImg: require('./images/wow_logo.png').default,
        specImg: require('./images/wow_logo.png').default
    });

    const factions = [
        "Alliance", "Horde"
    ];
    const races = [
        ["Dwarf", "Gnome", "Human", "Night Elf"], // Alliance races
        ["Orc", "Tauren", "Troll", "Undead"] // Horde races
    ];
    const genders = [
        "Male", "Female"
    ]
    const classes =[
        // Alliance classes
        [["Hunter", "Paladin", "Priest", "Rogue", "Warrior"], // Dwarf classes
        ["Mage", "Rogue", "Warlock", "Warrior"], // Gnome classes
        ["Mage" , "Paladin", "Priest", "Rogue", "Warlock", "Warrior"], // Human classes
        ["Druid" , "Hunter", "Priest", "Rogue", "Warrior"]], // Night Elf classes

        // Horde classes
        [["Hunter", "Rogue", "Shaman", "Warlock", "Warrior"], // Orc classes
        ["Druid", "Hunter", "Shaman", "Warrior"], // Tauren classes
        ["Hunter" , "Mage", "Priest", "Rogue", "Shaman", "Warrior"], // Troll classes
        ["Mage" , "Priest", "Rogue", "Warlock", "Warrior"]] // Undead classes
    ];
    const specs = [
        { 
            name: "Druid",
            classes: ["Balance", "Feral", "Restoration"]
        },
        {
            name: "Hunter",
            classes: ["Beastmastery", "Marksmanship", "Survival"]
        },
        {
            name: "Mage",
            classes: ["Arcane", "Fire", "Frost"]
        },
        {
            name: "Paladin",
            classes: ["Holy", "Protection", "Retribution"]
        },
        {
            name: "Priest",
            classes: ["Discipline", "Holy", "Shadow"]
        },
        {
            name: "Rogue",
            classes: ["Assassination", "Combat", "Subtlety"]
        },
        {
            name: "Shaman",
            classes: ["Elemental", "Enhancement", "Restoration"]
        },
        {
            name: "Warlock",
            classes: ["Affliction", "Demonology", "Destruction"]
        },
        {
            name: "Warrior",
            classes: ["Arms", "Fury", "Protection"]
        }
    ];

    function generateCharacter() {
        var character = {};
        // Set faction
        var factionIndex = getIndex(factions.length);
        character.faction = factions[factionIndex];
        // Set race
        var raceIndex = getIndex(races[factionIndex].length);
        character.race = races[factionIndex][raceIndex];
        // Set gender
        var genderIndex = getIndex(genders.length);
        character.gender = genders[genderIndex];
        // Set class
        var classIndex = getIndex(classes[factionIndex][raceIndex].length);
        character.class = classes[factionIndex][raceIndex][classIndex];
        // Set spec
        var specIndex = getIndex(specs.find(spec => spec.name === character.class).classes.length);
        character.spec = specs.find(spec => spec.name === character.class).classes[specIndex];
        // Set image paths
        character.factionImg = require('./images/factions/' + (character.faction).toLowerCase() + '.png').default;
        character.raceImg = require('./images/races/' + (character.race + '_' + character.gender).toLowerCase().replace(' ', '') + '.png').default;
        character.classImg = require('./images/classes/' + character.class.toLowerCase() + '.png').default;
        character.specImg = require('./images/specs/' + (character.class + '_' + character.spec).toLowerCase() + '.png').default;
        
        setCharacter(character);
    }

    function getIndex (arrayLength) {
        return Math.floor(Math.random() * arrayLength);
    }

    return ( 
        <ThemeProvider theme={themeMode}>
            <>
            <GlobalStyles/>
                <div className = "container">
                    <DarkModeSwitch theme={theme} toggleTheme={themeToggler} />
                    <Header title="WoWGen" subtitle="A WoW Classic character generator" />
                    <Button text="Generate" onClick={generateCharacter}/>
                    <Info faction={character.faction} race={character.race} gender={character.gender} class={character.class} spec={character.spec} />
                    <div className="imgcon">
                        <Image type="faction_image" url={character.factionImg} />
                        <Image type="race_image" url={character.raceImg} />
                        <Image type="class_image" url={character.classImg} />
                        <Image type="spec_image" url={character.specImg}/>
                    </div>
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
