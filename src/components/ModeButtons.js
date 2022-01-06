import Button from '@material-ui/core/Button'
import CasinoOutlinedIcon from '@material-ui/icons/CasinoOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import ClearIcon from '@material-ui/icons/Clear';
import { Grid } from '@material-ui/core';

const ModeButtons = ({ mode, setMode, generateCharacter, clearCharacters, generateParty, buildModal }) => {
    function changeMode(event) {
        const id = event.currentTarget.id;
        if (id != mode) {
            console.log(id);
            clearCharacters();
            setMode(id);
        }        
    }

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <Grid item>
                    <Button className="mode-button" variant={mode === "generate" ? "contained" : "outlined"} color="secondary" startIcon={<CasinoOutlinedIcon />} onClick={changeMode} id={"generate"}>
                        Generate Mode
                    </Button>
                </Grid> 
                <Grid item>
                    <Button className="mode-button" variant={mode === "build" ? "contained" : "outlined"} color="secondary" startIcon={<GavelOutlinedIcon />} onClick={buildModal} id={"build"}>
                        Build Mode
                    </Button>
                </Grid>
            </Grid>
            <Grid className="sub-buttons" container direction="row" justifyContent="center" alignItems="center" spacing={2} style={mode === "build" ? {display: 'none'} : {display: 'flex'}}>
                <Grid item>
                    <Button className="sub-button" variant={"outlined"} color="secondary" startIcon={<PersonIcon />} onClick={generateCharacter}>
                        Generate Character
                    </Button>
                </Grid> 
                <Grid item>
                    <Button className="sub-button" variant={"outlined"} color="secondary" startIcon={<PeopleIcon />} onClick={generateParty}>
                        Generate Party
                    </Button>
                </Grid>
                <Grid item>
                    <Button className="sub-button" variant={"outlined"} color="secondary" startIcon={<ClearIcon />} onClick={clearCharacters}>
                        Clear
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default ModeButtons
