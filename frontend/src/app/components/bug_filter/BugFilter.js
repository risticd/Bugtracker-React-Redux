/*
 * Component: BugTrackerProjectBugFilter
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import './BugFilter.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class BugTrackerProjectBugFilter extends Component {
    static propTypes = {
    };

    static defaultProps = {
      style: {marginLeft: 67}
    };

    constructor(props) {
        super(props);
        this.state = {selectedvalues: {status: "New", priority: "Low"}}
    }

    componentWillMount() {
        // Component created
    }

    componentDidMount() {
        // Component ready
    }

    render() {
        return (
          <div className="bugtrackerproject-bug-filter">
            <h3>Filter Bug List</h3>
            <SelectField value={this.state.selectedvalues.status}
            onChange={this.statusHandleChange} floatingLabelText="Status">
              <MenuItem value="New" primaryText="New" />
              <MenuItem value="Open" primaryText="Open" />
              <MenuItem value="Closed" primaryText="Closed" />
            </SelectField>
            <br/>
            <SelectField value={this.state.selectedvalues.priority}
            onChange={this.priorityHandleChange} floatingLabelText="Priority">
              <MenuItem value="Low" primaryText="Low" />
              <MenuItem value="Medium" primaryText="Medium" />
              <MenuItem value="High" primaryText="High" />
            </SelectField>
            <br/>
            <RaisedButton label="Filter" primary={true}  onClick={this.filterHandleClick}>
            </RaisedButton>
            <RaisedButton label="Show All" primary={true} style={this.props.style} onClick={this.resetHandleClick}>
            </RaisedButton>
          </div>
        );
    }

    statusHandleChange = (event, index, value) => {
      let newstatusvalues = this.state.selectedvalues
      newstatusvalues.status = value
      this.setState({selectedvalues: newstatusvalues})
    }

    priorityHandleChange = (event, index, value) => {
      let newpriorityvalues = this.state.selectedvalues
      newpriorityvalues.priority = value
      this.setState({selectedvalues: newpriorityvalues})
    }

    filterHandleClick = (ev) => {
      this.props.filterBugs(this.state.selectedvalues)
    }

    resetHandleClick = (ev) => {
      this.setState({selectedvalues: {status: "New", priority: "Low"}})
      this.props.resetBugList()
    }
}

export default BugTrackerProjectBugFilter;
