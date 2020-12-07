import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';

import App from './Pages/App';

ReactDOM.render(
    <GlobalContext>
        <Router >
            <App />
        </Router>
    </GlobalContext>,
    document.getElementById("root"));
