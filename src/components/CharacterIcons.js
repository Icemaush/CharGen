import Icon from "./Icon"
import styled from 'styled-components'

const IconContainer = styled.div`
        /* display: block; */
        /* border: 1px solid blue;; */
    `;

const CharacterIcons = ({character}) => {
    return (
        <IconContainer>
            <Icon type="faction_image" url={character.factionIconUrl} alt="Faction Icon" width="64" height = "64"/>
            <Icon type="race_image" url={character.raceIconUrl} alt="Race Icon" width="64" height = "64"/>
            <Icon type="class_image" url={character.classIconUrl} alt="Class Icon" width="64" height = "64"/>
            <Icon type="spec_image" url={character.specIconUrl} alt="Spec Icon" width="64" height = "64"/>
        </IconContainer>
    )
}

export default CharacterIcons
