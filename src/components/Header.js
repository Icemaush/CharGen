import styled from 'styled-components'

const Header = ({ title, subtitle }) => {
    const Title = styled.h1`
        font-size: 5rem;
        text-align: center;
    `;

    const Subtitle = styled.h4`
        font-size: 2rem;

    `;

    return (
        <header>
            <Title>{ title }</Title>
            <Subtitle>{ subtitle }</Subtitle>
        </header>
    )


}

export default Header
