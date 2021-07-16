import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const DarkModeSwitch = styled.div`
    display: flex;
    position: absolute;
    top: 8px;
    right: 10px;
`;

const Toggle = ({theme, toggleTheme }) => {
    return (
        <DarkModeSwitch>
            <FormControlLabel
                control={<Switch checked={theme === 'dark' ? true : false} onChange={toggleTheme} />}
                label={<span style={{ fontFamily: 'Syncopate' }}>Dark Mode</span>}
            />
        </DarkModeSwitch>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;