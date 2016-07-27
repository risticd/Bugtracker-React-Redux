/*
 * Component: BugTrackerProjectIndexPage
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import './AdminLandingPage.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, {Component, PropTypes} from 'react';
import BugTrackerProjectBugTable from '../../components/bug_table/BugTable'
import BugTrackerProjectBugFilter from '../../components/bug_filter/BugFilter'
import BugsApi from '../../lib/BugsApi'
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class BugTrackerProjectAdminLandingPage extends Component {
    static propTypes = {
      
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);

        this.state = {bugs: []};
    }

    componentWillMount() {
        // Component created
    }

    componentDidMount() {
        // Component ready

        BugsApi.getBugData(data => {
          this.setState({bugs: data})
        })
    }

    filterBugs = (querydata) => {
      BugsApi.filterBugData(querydata, data => {
        if(data.length != 0) {
          this.setState({bugs: data})
        }
        else {
          alert('No documents to display.')
        }
      })
    }

    resetBugList = () => {
      BugsApi.getBugData(data => {
        this.setState({bugs: data})
      })
    }

    render() {
        return (
            <div className="bugtrackerproject-admin-landing-page">
              <BugTrackerProjectBugFilter filterBugs={this.filterBugs}
              resetBugList={this.resetBugList}/>
              <br/>
              <BugTrackerProjectBugTable bugs={this.state.bugs}/>
            </div>
        );
    }
}

export default BugTrackerProjectAdminLandingPage;
