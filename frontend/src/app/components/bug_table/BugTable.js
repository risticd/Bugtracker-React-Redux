/*
 * Component: BugTrackerProjectBugTable
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import './BugTable.less';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, {Component, PropTypes} from 'react';
import BugTrackerProjectBugRow from './bug_row/BugRow'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table'
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class BugTrackerProjectBugTable extends Component {
    static propTypes = {
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillMount() {
        // Component created
    }

    componentDidMount() {

    }

    render() {

        // Creates an object which returns an array of BugRow components
        // set to values passed in as a prop from the bugs array
        const bugRows = this.props.bugs.map((bug) => {
          return <BugTrackerProjectBugRow key={bug._id} bug={bug} />
        })

        return (
            <div className="bugtrackerproject-bug-table">
              <Table>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>Bug ID</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>Priority</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Problem</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bugRows}
                </TableBody>
              </Table>
            </div>
        );
    }
}

export default BugTrackerProjectBugTable;
