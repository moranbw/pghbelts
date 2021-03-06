import React from 'react';
import Body from '../body/Body';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import {grey} from '@material-ui/core/colors';

import './App.css';

function App() {

    const theme = createMuiTheme({
        palette: {
            primary: {main: grey[900]},
            secondary: {main: "#FFB612"},
            background: {
                default: "#e0e0e0"
            }
        },
        typography: {
            useNextVariants: true,
        },

    });



    return (
        <CssBaseline>
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Body/>
                </div>
            </MuiThemeProvider>
        </CssBaseline>
    );
}

export default App;
