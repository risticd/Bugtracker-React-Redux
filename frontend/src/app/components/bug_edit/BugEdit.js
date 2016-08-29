/*
 * Component: BugTrackerProjectBugEdit
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import './BugEdit.less';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router'
import EditIcon from 'material-ui/svg-icons/image/edit';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class BugTrackerProjectBugEdit extends Component {
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
        this.state={selectedvalues: {problem: this.props.problem,
          status: this.props.status, priority: this.props.priority}}
    }

    componentWillMount() {
        // Component created
    }

    componentDidMount() {
        // Component ready
    }

    render() {

        return (
          <div className="bugtrackerproject-bug-edit">
          <h3>Update/Delete Bug</h3>
          Name: {this.props.name}
          <br/>
          <TextField id="textfield_problem" floatingLabelText="Problem"
          value={this.state.selectedvalues.problem} onChange={this.updateValue}
          multiLine={true} floatingLabelStyle={this.props.floatingLabelStyle} />
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
          <SelectField value={this.state.selectedvalues.priority}
          onChange={this.priorityHandleChange} floatingLabelText="Priority"
          iconStyle={this.props.iconStyle} underlineStyle={this.props.underlineStyle}
          floatingLabelStyle={this.props.floatingLabelStyle}>
            <MenuItem value="Low" primaryText="Low" />
            <MenuItem value="Medium" primaryText="Medium" />
            <MenuItem value="High" primaryText="High" />
          </SelectField>
          <br/><br/>
          <Link to="/viewbugs">
          <RaisedButton label="Update Bug" icon={<EditIcon />}
          primary={true} labelPosition="before"  onClick={this.updateHandleClick}>
          </RaisedButton>
          </Link>
          </div>
        );
    }

    updateValue = (ev) => {
      let newproblemvalues = this.state.selectedvalues
      newproblemvalues.problem = ev.target.value
      this.setState({selectedvalues: newproblemvalues})
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

    updateHandleClick = () => {
      this.props.updateBug(this.props.bugid, this.state.selectedvalues)
    }
}

export default BugTrackerProjectBugEdit;
