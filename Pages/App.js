import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './Header';
import Homepage from './Homepage';
import JobDetails from './JobDetails'; 

export default function App() {
    return (
        <div>  
            <Header />
            <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/:jobId">
                    <JobDetails />
                </Route>
            </Switch>
        </div>
    )
}
