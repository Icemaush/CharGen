import Button from '@material-ui/core/Button'
import CasinoOutlinedIcon from '@material-ui/icons/CasinoOutlined';
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';
import { Grid } from '@material-ui/core';

const ModeButtons = ({ mode, setMode }) => {
    function click(e) {
        const id = e.target.id;
        console.log(id);
        // setMode(id);
    }

    return (    
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <Button className="mode-buttons" variant={mode === "generate" ? "contained" : "outlined"} color="secondary" startIcon={<CasinoOutlinedIcon />} onClick={(e) => {click(e)}} id={"generate"}>
                    Generate Character
                </Button>
            </Grid> 
            <Grid item>
                <Button className="mode-buttons" variant={mode === "build" ? "contained" : "outlined"} color="secondary" startIcon={<GavelOutlinedIcon />} onClick={(e) => {click(e)}} id={"build"}>
                    Build Character
                </Button>
            </Grid>
        </Grid>
    )
}

export default ModeButtons
