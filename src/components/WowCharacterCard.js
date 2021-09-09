import CharacterInfo from "./CharacterInfo"
import styled from 'styled-components'
import CharacterPreview from "./CharacterPreview";

const CharacterCard = styled.div`
    display: flex;
    border: 1px solid darkred;
    border-radius: 5px;
`;

const WowCharacterCard = ({character}) => {
    return (
        <CharacterCard>
            <CharacterInfo character={character} />
            <CharacterPreview character={character} />
        </CharacterCard>  
    )
}

export default WowCharacterCard
