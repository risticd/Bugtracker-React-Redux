import './AdminLandingPage.less';

import React, {Component, PropTypes} from 'react';
import BugTrackerProjectBugTable from '../../components/bug_table/BugTable'
import BugTrackerProjectBugFilter from '../../components/bug_filter/BugFilter'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BugDataActions from './../../actions/BugDataActions';
import Snackbar from 'material-ui/Snackbar';
import {Link} from 'react-router'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class BugTrackerProjectAdminLandingPage extends Component {
    static propTypes = {
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state={notfiltered:false}
    }

    componentWillMount() {
    }

    componentDidMount() {
      this.props.actions.fetchBugDataIfNeeded()
    }

    filterBugs = (query) => {
      this.props.actions.filterBugData(query)
    }

    resetBugList = () => {
      if(this.props.bugdata.filtered) {
        this.props.actions.invalidateBugData()
        this.props.actions.fetchBugDataIfNeeded()
      }
      else {
        this.setState({notfiltered: true})
      }
    }

    handleRequestCloseNotFiltered = () => {
      this.setState({notfiltered: false})
    }

    handleRequestCloseNoResults = () => {
      this.props.actions.invalidateResultsNotFound()
    }

    render() {
        const {bugdata, actions} = this.props

        return (
            <div className="bugtrackerproject-admin-landing-page">
            <div id="add-bug-link">
            <Link to="/">
            <FloatingActionButton>
            <ContentAdd />
            </FloatingActionButton>
            </Link>
            </div>
            <BugTrackerProjectBugFilter filterBugs={this.filterBugs}
            resetBugList={this.resetBugList}/>
            <br/>
            <BugTrackerProjectBugTable bugs={bugdata.bugs} />
            <Snackbar
            open={this.state.notfiltered}
            message="The bug list is already showing all available data."
            autoHideDuration={4000}
            onRequestClose={this.handleRequestCloseNotFiltered}
            />
            <Snackbar
            open={this.props.bugdata.resultsNotFound}
            message="No bugs were found using the selected filter."
            autoHideDuration={4000}
            onRequestClose={this.handleRequestCloseNoResults}
            />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    bugdata: state.bugDataReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(BugDataActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)
(BugTrackerProjectAdminLandingPage);
