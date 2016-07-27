/*
 * Component: AlchemySelectCampaignType
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React from 'react'
import { Route, IndexRoute } from 'react-router'


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import SampleProject from './components/SampleProject'
import BugTrackerProjectIndexPage from './pages/index_page/IndexPage'
import BugTrackerProjectAdminLandingPage from './pages/admin_landing_page/AdminLandingPage'


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Routes Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default (
    <Route path="/" component={SampleProject}>

        <IndexRoute component={BugTrackerProjectIndexPage}/>

        <Route path="/admin" component={BugTrackerProjectAdminLandingPage}>
        </Route>

    </Route>
)
