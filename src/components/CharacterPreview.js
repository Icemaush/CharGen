import styled from 'styled-components'
import Image from './Image'

const ImageContainer = styled.div`
        display: flex;
        position: absolute;
        top: 301px;
        border: 1px solid blue;;
    `;

const CharacterPreview = ({character}) => {
    return (
        <ImageContainer>
            <Image type="char_preview" url={character.previewImageUrl} />
        </ImageContainer>
    )
}

export default CharacterPreview
