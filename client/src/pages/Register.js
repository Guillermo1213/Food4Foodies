import React, { Fragment, Component } from "react";
import axios from 'axios';

class Register extends Component {
    state = {
        firstName: '',
        email: '',
        password: '',
        zip: ''
    }

    handleRegister = (event) => {
        event.preventDefault();
        // axios.post('/register', this.state)
        //     .then((res) => {
        //         this.props.setUser(res);
        //     });
        console.log(this.state);
    }

    handleInputChange = (event) => {
        const target = event && event.target;
        const name = target && target.name;
        const value = target && target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Fragment>
                <h2>Log in</h2>
                <p>{this.state.firstName} {this.state.password}</p>
                <form onSubmit={this.handleRegister} >
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                    <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    <input type="text" name="zip" value={this.state.zip} onChange={this.handleInputChange} />
                    <input type="submit" />
                </form>
            </Fragment>
        );
    }
}

export default Register;