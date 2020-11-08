import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    //Define form details
    //Need to add add / remove display none upon pressing submit
    return (
        <>
            <h1>Login below!</h1>
            <h3>If you don't have credentials feel free to poke around anyway by pressing submit</h3>
            <h3>(You just won't have access to any of the ranges)</h3>
            <form>
                <input className={styles.test} id="username" type="text" name="username"/>
                <label for="username">Username</label>
                <input className={styles.test} id="password" type="password" name="password"/>
                <label for="password">Password</label>
                <input className={styles.test} id="submit" type="submit"/>
                <label for="submit">Submit</label>
            </form>
        </>
    )
};


export default Login;