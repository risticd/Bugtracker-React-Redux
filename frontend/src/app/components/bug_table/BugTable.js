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
import CircularProgress from 'material-ui/CircularProgress';
import ErrorIcon from 'material-ui/svg-icons/alert/error';


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

        const errorIconStyle = {
            width: 48,
            height: 48,
        }
        const fetchingErr = this.props.fetchingErr
        const isFetching = this.props.isFetching
        let bugRows = null

        if(fetchingErr != null) {
          return <span><ErrorIcon style={errorIconStyle}/>{fetchingErr}</span>
        }

        else if(isFetching) {
          return <CircularProgress size={2} />
        }

        else {
          bugRows = this.props.bugs.map((bug) => {
            return <BugTrackerProjectBugRow key={bug._id} bug={bug} />
          })
        }

        return (
            <div className="bugtrackerproject-bug-table">
              <Table>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Problem</TableHeaderColumn>
                    <TableHeaderColumn>Priority</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>Edit Bug</TableHeaderColumn>
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
