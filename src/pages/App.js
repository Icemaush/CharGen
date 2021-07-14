import DarkModeSwitch from '../components/DarkModeSwitch'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { lightTheme, darkTheme } from "../components/Themes"
import {useDarkMode} from "../components/useDarkMode";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
  } from "react-router-dom";
import '../css/index.css'
import Home from './home';
import Wowgen from './wowgen';

function App() {
    // Dark Mode
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return ( 
        <>
            <Router>
                <ThemeProvider theme={themeMode}>
                    <>
                    <GlobalStyles/>
                    <DarkModeSwitch theme={theme} toggleTheme={themeToggler} />

                    </>
                </ThemeProvider>

                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>

                    <Route path='/wowgen' exact>
                        <Wowgen />
                    </Route>
                </Switch>

            </Router>
        </>

    );
}

export default App;
