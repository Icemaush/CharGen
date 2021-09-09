import styled from 'styled-components'

const ImageContainer = styled.div`
`;

const Img = styled.img`
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

const Image = (props) => {
    return (
        <ImageContainer>
            <Img src={props.url} alt={props.url} width={384} height={430}/>
        </ImageContainer>
    )
}

export default Image
