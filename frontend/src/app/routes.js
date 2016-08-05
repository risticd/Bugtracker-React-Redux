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
import BugTrackerProjectViewBugsPage from './pages/view_bugs_page/ViewBugsPage'
import BugTrackerProjectEditBugsPage from './pages/edit_bugs_page/EditBugsPage'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Routes Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default (
    <Route path="/" component={SampleProject}>

        <IndexRoute component={BugTrackerProjectIndexPage}/>

        <Route path="/viewbugs" component={BugTrackerProjectViewBugsPage}>
        </Route>

        <Route path="/editbugs" component={BugTrackerProjectEditBugsPage}>
        </Route>

    </Route>
)
