import styled from 'styled-components'

const IconContainer = styled.div`
        display: block;
        margin-top: 6px;
        margin-right: 10px;
        position: relative;
    `;

const Icon = (props) => {
    return (
        <IconContainer>
            <img className="char-img" src={props.url} alt={props.type} width={props.width} height={props.height}/>
        </IconContainer>
    )
}

export default Icon
