import styled from 'styled-components'
import Image from './Image'

const ImageContainer = styled.div`
    height: 430px;
    border-left: 1px solid darkred;
`;

const CharacterPreview = ({character}) => {
    return (
        <ImageContainer>
            <Image type="char_preview" url={character.previewImageUrl} />
        </ImageContainer>
    )
}

export default CharacterPreview
