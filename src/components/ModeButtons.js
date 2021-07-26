import styled from 'styled-components'

const ModeButtonContainer = styled.div`
    display: flex;
    position: absolute;
    /* top: 0px; */
    /* margin-left: auto;
    margin-right: auto; */
`;

const ModeButton = styled.div`
    display: block;
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid darkgrey;
    text-align: center;
    cursor: pointer;
    margin-left: 40px;
    margin-right: 40px;
    padding: 10px 15px 10px 15px;
    width: 300px;
    font-family: 'Syncopate';
    box-shadow: none;
    :hover {
        text-decoration: underline;
        text-decoration-color: #f50057;
        text-decoration-thickness: 3px;
    }
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
            <ModeButton className={mode === "generate" ? "active" : ""} onClick={() => setNewMode("generate")}>
                <span>Generate Character</span>
            </ModeButton>
            <ModeButton className={mode === "build" ? "active" : ""} onClick={() => setNewMode("build")}>Build Character</ModeButton>
        </ModeButtonContainer>
        
    )
}

export default ModeButtons
