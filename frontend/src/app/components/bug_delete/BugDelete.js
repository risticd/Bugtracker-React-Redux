/*
 * Component: BugTrackerProjectBugDelete
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import './BugDelete.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {Link} from 'react-router'
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class BugTrackerProjectBugDelete extends Component {
    static propTypes = {
    };

    static defaultProps = {

      styles: {
        mediumIcon: {
          width: 48,
          height: 48,
        },
        contentStyle: {
          marginLeft: "17px"
        }
      }

    };

    constructor(props) {
        super(props);

        this.state = {
          opendialog: false
        };
    }

    componentWillMount() {
        // Component created
    }

    componentDidMount() {
        // Component ready
    }

    render() {
      const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
          />,
          <Link to="viewbugs">
          <FlatButton
            label="Delete"
            primary={true}
            onTouchTap={this.handleDeleteAction}
          />
          </Link>
        ]
        return (
            <div className="bugtrackerproject-bug-delete">
            <RaisedButton label="Delete Bug" labelPosition="before"
            primary={true} icon={<DeleteIcon/>} onClick={this.handleButtonClick} />
            <Dialog actions={actions} open={this.state.opendialog}
            onRequestClose={this.handleClose}>
            <WarningIcon style={this.props.styles.mediumIcon}/>
            <span style={this.props.styles.contentStyle}>
            WARNING: Deleting a bug is a permanent action are you sure you wish to continue?
            </span>
            </Dialog>
            </div>
        );
    }

    handleButtonClick = () => {
      this.setState({opendialog: true})
    }

    handleClose = () => {
      this.setState({opendialog: false});
    };

    handleDeleteAction = () => {
      this.props.deleteBug(this.props.bugid)
    }
}

export default BugTrackerProjectBugDelete;
