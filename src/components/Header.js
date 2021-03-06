import styled from 'styled-components'

const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
`;

const Subtitle = styled.h4`
    font-size: 2rem;
    text-align: center;
`;

const Header = ({ title, subtitle }) => {
    return (
        <header>
            <Title>{ title }</Title>
            <Subtitle>{ subtitle }</Subtitle>
        </header>
    )
}

export default Header
