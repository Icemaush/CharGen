import React from 'react'
import { func, string } from 'prop-types';

const Toggle = ({theme, toggleTheme }) => {
    return (
        <div className="darkmode-switch">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={theme === 'dark' ? true : false} onClick={ toggleTheme }/>
            </div>
            <label className="form-check-label darkmode-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;