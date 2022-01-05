import React from 'react';
import styled from 'styled-components'
import Icon from '../components/Icon'

const Card = styled.div`
    display: flex;
    vertical-align: middle;
    border: 1px solid #f50057;
    border-radius: 15px;
    padding: 15px;
    padding-left: 40px;
    :hover {
        background-color: rgba(50, 55, 61, .5);
    }
`;

const Title = styled.p`
    font-size: 4rem;
    padding-left: 15px;
    margin-top: auto;
    margin-bottom: auto;
`;

const CardLink = (props) => {
    return (
        <Card>
            <Icon type={props.type} url={props.url} width="96" height="96"></Icon>
            <Title>{props.text}</Title>
        </Card>
    )   
}

export default CardLink
