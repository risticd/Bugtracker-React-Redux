import './IndexPage.less';

import React, {Component, PropTypes} from 'react';
import BugTrackerProjectBugAdd from '../../components/bug_add/BugAdd'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BugDataActions from './../../actions/BugDataActions';
import BugsApi from './../../lib/BugsApi'

class BugTrackerProjectIndexPage extends Component {
    static propTypes = {

    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    addBug = (newBug) => {
      this.props.actions.addNewBugData(newBug)
    }

    render() {
        const {bugdata, actions} = this.props

        return (
            <div className="bugtrackerproject-index-page">
            <BugTrackerProjectBugAdd addBug={this.addBug}/>
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
(BugTrackerProjectIndexPage);
