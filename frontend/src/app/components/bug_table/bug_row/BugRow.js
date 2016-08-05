/*
 * Component: BugTrackerProjectBugRow
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import './BugRow.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, {Component, PropTypes} from 'react';
import {TableRow ,TableRowColumn} from 'material-ui/Table'
import {Link} from 'react-router'
import IconButton from 'material-ui/IconButton';
import EditBugIcon from 'material-ui/svg-icons/image/edit';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class BugTrackerProjectBugRow extends Component {
    static propTypes = {
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentWillMount() {
        // Component created
    }

    componentDidMount() {
        // Component ready
    }

    render() {
        return (
        <TableRow>
          <TableRowColumn>{this.props.bug.owner}</TableRowColumn>
          <TableRowColumn>{this.props.bug.title}</TableRowColumn>
          <TableRowColumn>{this.props.bug.priority}</TableRowColumn>
          <TableRowColumn>{this.props.bug.status}</TableRowColumn>
          <TableRowColumn>
          <Link to="/editbugs">
          <IconButton>
          <EditBugIcon/>
          </IconButton>
          </Link>
          </TableRowColumn>
        </TableRow>
        );
    }
}

export default BugTrackerProjectBugRow;
