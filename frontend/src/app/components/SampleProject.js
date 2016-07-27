/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class SampleProject extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
        primary1Color: '#f77238'
    },
});


export default SampleProject;
