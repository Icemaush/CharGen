import Header from '../components/Header'
import DarkModeSwitch from '../components/DarkModeSwitch'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { lightTheme, darkTheme } from "../components/Themes"
import {useDarkMode} from "../components/useDarkMode"
import '../css/index.css'

function App() {
    // Dark Mode
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return ( 
        <ThemeProvider theme={themeMode}>
            <>
            <GlobalStyles/>
            <DarkModeSwitch theme={theme} toggleTheme={themeToggler} />
                <div className = "container">
                    <Header title="CharGen" subtitle="The best character generators out there" />

                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
