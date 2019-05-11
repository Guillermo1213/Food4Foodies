import React, { Fragment, Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class Login extends Component {
    state = {
        username: '',
        password: '',
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/register' />
        }
    }

    handleLogin = (event) => {
        event.preventDefault();
        // axios.post('/login', this.state)
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
                <p>{this.state.username} {this.state.password}</p>
                <form onSubmit={this.handleLogin} >
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                    <input type="submit" />
                    <div>
                        {this.renderRedirect()}
                        <button onClick={this.setRedirect}>Redirect</button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default Login;