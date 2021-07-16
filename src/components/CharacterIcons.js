import Icon from "./Icon"
import styled from 'styled-components'

const IconContainer = styled.div`
        display: block;
        border: 1px solid blue;;
    `;

const CharacterIcons = ({character}) => {
    return (
        <IconContainer>
            <Icon type="faction_image" url={character.factionIconUrl} alt={character.factionIconUrl} width="64" height = "64"/>
            <Icon type="race_image" url={character.raceIconUrl} alt={character.raceIconUrl} width="64" height = "64"/>
            <Icon type="class_image" url={character.classIconUrl} alt={character.classIconUrl} width="64" height = "64"/>
            <Icon type="spec_image" url={character.specIconUrl} alt={character.specIconUrl} width="64" height = "64"/>
        </IconContainer>
    )
}

export default CharacterIcons
