import React from 'react';
import MainLayout from "./layout";
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <MainLayout />
        </Router>

    )
}
export default App;