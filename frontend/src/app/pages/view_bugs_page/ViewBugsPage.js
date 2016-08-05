import './ViewBugsPage.less';

import React, {Component, PropTypes} from 'react';
import BugTrackerProjectBugTable from '../../components/bug_table/BugTable'
import BugTrackerProjectBugFilter from '../../components/bug_filter/BugFilter'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BugDataActions from './../../actions/BugDataActions';
import Snackbar from 'material-ui/Snackbar';
import {Link} from 'react-router'
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';

class BugTrackerProjectViewBugsPage extends Component {
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
        const styles = {
          mediumIcon: {
            width: 48,
            height: 48,
          }
        }

        return (
            <div className="bugtrackerproject-view-bugs-page">
            <div id="index-page-link">
            <Link to="/">
            <IconButton tooltip="Back to Add Bugs" tooltipPosition="top-left"
            iconStyle={styles.mediumIcon}>
            <HomeIcon/>
            </IconButton>
            </Link>
            </div>
            <BugTrackerProjectBugFilter filterBugs={this.filterBugs}
            resetBugList={this.resetBugList}/>
            <br/>
            <BugTrackerProjectBugTable bugs={this.props.bugdata.bugs}
            isFetching={this.props.bugdata.isFetching}
            fetchingErr={this.props.bugdata.fetchingErr}/>
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
(BugTrackerProjectViewBugsPage);
