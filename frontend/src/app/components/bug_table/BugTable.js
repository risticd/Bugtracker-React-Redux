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
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
TableRowColumn} from 'material-ui/Table'
import CircularProgress from 'material-ui/CircularProgress';
import ErrorIcon from 'material-ui/svg-icons/alert/error';
import {Link} from 'react-router'
import EditIcon from 'material-ui/svg-icons/image/edit';
import HappyIcon from 'material-ui/svg-icons/social/mood';
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
      thcStyle: {
        color: '#f77238'
      }
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
          return (
            <div>
            <ErrorIcon style={errorIconStyle}/>{fetchingErr}
            </div>
          )
        }

        else if(isFetching) {
          return <CircularProgress size={2} />
        }

        else if(this.props.bugs.length == 0) {
          return (
            <div>
            <ErrorIcon style={errorIconStyle}/> There is no bug data currently in the database.
            Please add a new bug from the <Link to="/">add bugs</Link> page.
            </div>
          )
        }

        else {
          bugRows = this.props.bugs.map((bug) => {
            return (
              <TableRow key={bug._id}>
              <TableRowColumn>{bug.owner}</TableRowColumn>
              <TableRowColumn>{bug.title}</TableRowColumn>
              <TableRowColumn>{bug.status}</TableRowColumn>
              <TableRowColumn>{bug.priority}</TableRowColumn>
              <TableRowColumn>
              <Link to="editbugs">
              <EditIcon />
              </Link>
              </TableRowColumn>
              </TableRow>
            )
          })
        }

        return (
            <div className="bugtrackerproject-bug-table">
              <Table onRowSelection={this.handleRowSelect}>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn style={this.props.thcStyle}>Name</TableHeaderColumn>
                    <TableHeaderColumn style={this.props.thcStyle}>Problem</TableHeaderColumn>
                    <TableHeaderColumn style={this.props.thcStyle}>Status</TableHeaderColumn>
                    <TableHeaderColumn style={this.props.thcStyle}>Priority</TableHeaderColumn>
                    <TableHeaderColumn style={this.props.thcStyle}>Edit Bug</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bugRows}
                </TableBody>
              </Table>
              </div>
          );
    }

    editAction = (row) => {
      if(this.props.bugs.length != 1) {

          let bugid = this.props.bugs[row]._id
          this.props.fetchBugDataByID(bugid)
        }
    }

    handleRowSelect = (selectedrow) => {
      if(selectedrow.length != 0) {
        this.editAction(selectedrow)
      }
    }
}

export default BugTrackerProjectBugTable;
