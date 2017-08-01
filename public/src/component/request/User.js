import React from 'react';

class User extends React.Component {
    constructor(props) {
        console.log('User Constructed');
        super(props);
        this.state = {
            username: this.props.user.username,

            password: this.props.user.password,
            newPassword: '',

            name: this.props.user.name,
            newName: '',

            type: this.props.user.type,

            approver: this.props.user.approver,
            newApprover: '',

            approvelimit: this.props.user.approvelimit,
            newLimit: 0
        };
        this.deleteUser = this.deleteUser.bind(this);
        this.updateUser = this.updateUser.bind(this);

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handlePassSubmit = this.handlePassSubmit.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNameSubmit = this.handleNameSubmit.bind(this);

        this.handleApproverChange = this.handleApproverChange.bind(this);
        this.handleApproverSubmit = this.handleApproverSubmit.bind(this);

        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.handleLimitSubmit = this.handleLimitSubmit.bind(this);
    }

    deleteUser(e) {
        console.log('tried to delete', this.state.username);
        alert('Delete does not work yet');
    }

    updateUser(res, key, value) {
        console.log(res.data.data, key, value);
        if (res.data.data === 1) {
            this.setState({
                [key]: value
            });
        }
        else {
            console.log('Database returned 0 for update');
        }
    }

    handlePassChange(e) {
        this.setState({
           newPassword: e.target.value
        });
    }
    handleNameChange(e) {
        this.setState({
            newName: e.target.value
        });
    }
    handleApproverChange(e) {
        this.setState({
            newApprover: e.target.value
        });
    }
    handleLimitChange(e) {
        this.setState({
            newLimit: e.target.value
        });
    }
    handlePassSubmit(e) {
        this.props.updateUser(this.state.username,'password', this.state.newPassword, this.updateUser);
    }
    handleNameSubmit(e) {
        this.props.updateUser(this.state.username,'name', this.state.newName, this.updateUser);
    }
    handleApproverSubmit(e) {
        this.props.updateUser(this.state.username,'approver', this.state.newApprover, this.updateUser);
    }
    handleLimitSubmit(e) {
        this.props.updateUser(this.state.username, 'approvelimit', this.state.newLimit, this.updateUser);
    }

    render() {
        return (
            <div className="user" >
                <div className="userColumn username">
                    <div className="userValue">
                        <h1> {this.state.username} </h1>
                    </div>
                    <div className="userInput">
                        <button onClick={this.deleteUser}> Delete</button>
                    </div>
                </div>

                <div className="userColumn password">
                    <div className="userValue">
                        <h1> {this.state.password} </h1>
                    </div>
                    <div className="userInput">
                        <input onChange={this.handlePassChange}></input>
                        <button onClick={this.handlePassSubmit}> Submit</button>
                    </div>
                </div>

                <div className="userColumn name">
                    <div className="userValue">
                        <h1> {this.state.name} </h1>
                    </div>
                    <div className="userInput">
                        <input onChange={this.handleNameChange}></input>
                        <button onClick={this.handleNameSubmit}> Submit</button>
                    </div>
                </div>

                <div className="userColumn approver">
                    <div className="userValue">
                        <h1> {this.state.approver} </h1>
                    </div>
                    <div className="userInput">
                        <input onChange={this.handleApproverChange}></input>
                        <button onClick={this.handleApproverSubmit}> Submit</button>
                    </div>
                </div>

                <div className="userColumn limit">
                    <div className="userValue">
                        <h1> {this.state.approvelimit} </h1>
                    </div>
                    <div className="userInput">
                        <input onChange={this.handleLimitChange}></input>
                        <button onClick={this.handleLimitSubmit}> Submit</button>
                    </div>
                </div>

            </div>
        )
    }
}

module.exports = User;

/*

 this.onNameChange = this.onNameChange.bind(this);
 this.onApproverChange = this.onNameChange.bind(this);
 this.onLimitChange = this.onNameChange.bind(this);
 this.onPasswordChange = this.onNameChange.bind(this);
 this.toggleActivate = this.onNameChange.bind(this);


 */