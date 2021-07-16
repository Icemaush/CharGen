import styled from 'styled-components'

const ImageContainer = styled.div`
        display: flex;
    `;

const Image = (props) => {
    return (
        <ImageContainer>
            <img src={props.url} alt={props.url} />
        </ImageContainer>
    )
}

export default Image
