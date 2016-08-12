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
import Subheader from 'material-ui/Subheader';
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
      style: {
        marginLeft: 67
      },
      iconStyle: {
        fill: '#000000'
      },
      underlineStyle: {
        borderColor: '#888888'
      },
      floatingLabelStyle: {
        color: '#f77238'
      }
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
            <Subheader>Filter Bug List</Subheader>
            <SelectField value={this.state.selectedvalues.priority}
            onChange={this.priorityHandleChange} floatingLabelText="Priority"
            iconStyle={this.props.iconStyle} underlineStyle={this.props.underlineStyle}
            floatingLabelStyle={this.props.floatingLabelStyle}>
              <MenuItem value="Low" primaryText="Low" />
              <MenuItem value="Medium" primaryText="Medium" />
              <MenuItem value="High" primaryText="High" />
            </SelectField>
            <br/>
            <SelectField value={this.state.selectedvalues.status}
            onChange={this.statusHandleChange} floatingLabelText="Status"
            iconStyle={this.props.iconStyle} underlineStyle={this.props.underlineStyle}
            floatingLabelStyle={this.props.floatingLabelStyle}>
              <MenuItem value="New" primaryText="New" />
              <MenuItem value="Open" primaryText="Open" />
              <MenuItem value="Closed" primaryText="Closed" />
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
