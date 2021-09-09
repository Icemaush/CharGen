import WowCharacterCard from "./WowCharacterCard"
import styled from 'styled-components'

const CharacterDisplayWindowContainer = styled.div`
    display: flex;
    justify-content: center;
    /* border: 1px solid blue; */
`;

const CharacterDisplayWindow = ({characters}) => {
    return (
        <CharacterDisplayWindowContainer>
            {characters.map(character => 
                <WowCharacterCard character={character} />
            )}
        </CharacterDisplayWindowContainer>
    )
}

export default CharacterDisplayWindow
