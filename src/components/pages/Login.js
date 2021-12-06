import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firbase-config';

import './Login.css';


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password); 
            await history.push('/');
        } catch (err) {
            alert(err.message)
        }
    }

    const register = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            history.push('/')
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className='login'>
            <Link to="/">
                    <img className="login__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG2.png" 
                    alt="logo" />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form className='login__form'>
                    <h5>Email</h5>
                    <input 
                    type="text" 
                    value={email} 
                    onChange={e => {setEmail(e.target.value)}}
                    />
                    <h5>Password</h5>
                    <input 
                    type="password" 
                    value={password} 
                    onChange={e => {setPassword(e.target.value)}} 
                    />
                    <button className='login__signInButton' onClick={login}>Sign In</button>
                    <button className='login__registerButton' onClick={register}>
                        Create your Amazon account
                    </button>
                </form>
                <p>
                    By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
            </div>
        </div>
    )
}

export default Login
