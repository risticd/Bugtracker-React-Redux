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
import {Link} from 'react-router'
import Snackbar from 'material-ui/Snackbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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

        this.state = {open: false};
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
                <div id="add-bug-button">
                <Link to="/admin">
                <FloatingActionButton onClick={this.handleClick}>
                <ContentAdd />
                </FloatingActionButton>
                </Link>
                </div>
                <Snackbar
                open={this.state.open}
                message="All fields must be completed to proceed."
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
                />
            </div>
        </div>
        )
    }

    handleRequestClose = () => {
      this.setState({open: false});
    };

    handleClick = (ev) => {

      let name = document.getElementById('textfield_name')
      let problem = document.getElementById('textfield_problem')

      if(name.value && problem.value != "") {
        this.props.addBug({status: "New", priority: "Low", owner: name.value, title: problem.value})
      }
      else {
        ev.preventDefault()
        this.setState({open: true});
      }
    }
}

export default BugTrackerProjectBugAdd;
