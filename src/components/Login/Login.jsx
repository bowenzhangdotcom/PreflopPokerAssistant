import React from 'react';
import styles from './Login.module.css';

class Login extends React.Component {
    render() {
        return (
            <>
                <h1>Login below!</h1>
                <h3>If you don't have credentials feel free to poke around anyway by pressing submit</h3>
                <h3>(You just won't have access to any of the ranges)</h3>
                <form>
                    <label htmlFor="password">Password</label>
                    <input className={styles.test} onChange={this.props.handleLoginPassword} id="password" type="password" name="password"/>
                    
                    <input className={styles.test} id="submit" type="submit"/>
                </form>
            </>
        )
    }
};


export default Login;