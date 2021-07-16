import CharacterInfo from "./CharacterInfo"
import CharacterIcons from "./CharacterIcons";
import styled from 'styled-components'
import CharacterPreview from "./CharacterPreview";

const WowCharacterCard = ({character}) => {
    const CharacterCard = styled.div`
        display: flex;
        position: relative;
        width: fit-content;
        border: 1px solid darkred;
    `;

    return (

        <CharacterCard>
            <CharacterInfo character={character} />
            <CharacterIcons character={character} />
            <CharacterPreview character={character} />
        </CharacterCard>
            
    )
}

export default WowCharacterCard
