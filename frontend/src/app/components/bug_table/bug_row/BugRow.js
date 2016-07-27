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
          <TableRowColumn>{this.props.bug._id}</TableRowColumn>
          <TableRowColumn>{this.props.bug.status}</TableRowColumn>
          <TableRowColumn>{this.props.bug.priority}</TableRowColumn>
          <TableRowColumn>{this.props.bug.owner}</TableRowColumn>
          <TableRowColumn>{this.props.bug.title}</TableRowColumn>
        </TableRow>
        );
    }
}

export default BugTrackerProjectBugRow;
