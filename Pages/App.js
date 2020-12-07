import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './Header';
import JobDetails from './JobDetails';
import Jobs from './Jobs';
import Search from './Search';

export default function App() {
    return (
        <div>
            <Header />
            <Search />
            <Switch>
                <Route exact path="/">
                    <Jobs />
                </Route>
                <Route exact path="/:jobId">
                    <JobDetails />
                </Route>
            </Switch>
        </div>
    )
}
