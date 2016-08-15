/*
 * Component: BugTrackerProjectEditBugsPage
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import './EditBugsPage.less';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, {Component, PropTypes} from 'react';
import BugTrackerProjectBugEdit from '../../components/bug_edit/BugEdit'
import BugTrackerProjectBugDelete from '../../components/bug_delete/BugDelete'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BugDataActions from './../../actions/BugDataActions';
import ErrorIcon from 'material-ui/svg-icons/alert/error';
import {Link} from 'react-router'
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class BugTrackerProjectEditBugsPage extends Component {
    static propTypes = {
    };

    static defaultProps = {

      styles: {
        errorIconStyle: {
            width: 48,
            height: 48
        },
        linkStyle: {
          underline: "none"
        }
      }

    }

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentWillMount() {
        // Component created
    }

    componentDidMount() {
    }

    render() {
      const {bugdata, actions} = this.props

      if(this.props.bugdata.bugs.length != 0) {
        const bug = this.props.bugdata.bugs[0]

        return (
          <div className="flexcontainer">
            <div className="bugtrackerproject-edit-bugs-page">
            <BugTrackerProjectBugEdit/>
            <br/>
            <BugTrackerProjectBugDelete bugid={bug._id}
            deleteBug={this.props.actions.removeBugDataByID}/>
            </div>
          </div>
        )
      }

      else {
        return (
          <div className="flexcontainer">
            <div className="bugtrackerproject-edit-bugs-page">
            <ErrorIcon style={this.props.styles.errorIconStyle}/>
            This page can NOT be accessed directly. Please select a bug from the <Link to="viewbugs">bug list</Link>.
            </div>
          </div>
        )
      }
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
(BugTrackerProjectEditBugsPage);
