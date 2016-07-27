/*
 * Component: BugTrackerProjectBugAdd
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import './BugAdd.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class BugTrackerProjectBugAdd extends Component {
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
        <div className="flexcontainer">
            <div className="bugtrackerproject-bug-add">
                <h3>Add New Bug</h3>
                <TextField id="textfield_name" floatingLabelText="Name"/>
                <br/>
                <TextField id="textfield_problem" floatingLabelText="Problem"/>
                <br/>
                <RaisedButton label="Add Bug" primary={true} onClick={this.handleClick}>
                </RaisedButton>
            </div>
        </div>
        )
    }

    // ES6 syntax {handleClick} for Add Bug button
    handleClick = (ev) => {

      ev.preventDefault()
      let name = document.getElementById('textfield_name')
      let problem = document.getElementById('textfield_problem')

      if(name.value && problem.value != "") {
        this.props.addBug({status: "New", priority: "Low", owner: name.value, title: problem.value})
      }
      else {
        alert('Add Bug fields can not be empty.')
      }

      // Clear the form for the next input
      name.value=""; problem.value="";
    }
}

export default BugTrackerProjectBugAdd;
