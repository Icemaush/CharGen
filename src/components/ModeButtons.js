import styled from 'styled-components'

const ModeButtonContainer = styled.div`
    display: flex;
    position: absolute;
    /* top: 0px; */
    /* margin-left: auto;
    margin-right: auto; */
`;

const ModeButton = styled.button`
    display: block;
    background-color: #bdbdbd;
    border-radius: 20px;
    margin-left: 40px;
    margin-right: 40px;
    padding: 10px 15px 10px 15px;
    width: 250px;
    font-family: 'Syncopate';
    box-shadow: none;
    :active {
        background-color: #f50057;
    }
`;



const ModeButtons = ({mode, setMode}) => {
    const setNewMode = (newMode) => {
        console.log(newMode);
        if (newMode !== mode) {
            setMode(newMode);
        }
    }

    return (
        <ModeButtonContainer>
            <ModeButton className={mode === "generate" ? "active" : ""} onClick={() => setNewMode("generate")}>Generate Character</ModeButton>
            <ModeButton className={mode === "build" ? "active" : ""} onClick={() => setNewMode("build")}>Build Character</ModeButton>
        </ModeButtonContainer>
        
    )
}

export default ModeButtons
