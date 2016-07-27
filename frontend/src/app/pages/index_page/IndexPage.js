/*
 * Component: BugTrackerProjectIndexPage
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import './IndexPage.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, {Component, PropTypes} from 'react';
import BugTrackerProjectBugAdd from '../../components/bug_add/BugAdd'
import BugsApi from '../../lib/BugsApi'
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class BugTrackerProjectIndexPage extends Component {
    static propTypes = {
      
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);

        this.state = {newbugs: []};
    }

    componentWillMount() {
        // Component created
    }

    componentDidMount() {
        // Component ready
    }

    addBug = (newBug) => {
      BugsApi.addBugData(newBug, data => {
        this.setState({newbugs: data})
      })
    }

    render() {

        return (
            <div className="bugtrackerproject-index-page">
            <BugTrackerProjectBugAdd addBug={this.addBug}/>
            </div>
        );
    }
}

export default BugTrackerProjectIndexPage;
