import WowCharacterCard from "./WowCharacterCard"
import styled from 'styled-components'

const CharacterDisplayWindowContainer = styled.div`
    display: flex;
    position: relative;
    top: 100px;
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
