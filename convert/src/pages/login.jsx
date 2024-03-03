import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './login.css';
function Login() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [loading, setLoading]=useState(false);
  const [redirect, setRedirect]=useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:9000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
  
      if (res.ok) {
        const data = await res.json();
        setLoading(false);
        setRedirect(true);
      } else {
        const err = await res.text();
        throw new Error(err);
      }
    } catch (error) {
      setLoading(false);
      alert('Failed ' + error.message);
    }
  }

  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [redirect]);

  if(redirect){
        return <Navigate to={'/'} />
  }
    return (
      <div class="login-box">
      <h2>Login</h2>
      <form  onSubmit={handleLogin}>
        <div class="user-box">
          <input type='email' name="email" required value={email} onChange={e=>setEmail(e.target.value)} id="email"/>
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="password" required  value={password} onChange={e=>setPassword(e.target.value)} id="password"/>
          <label>Password</label>
        </div>
        <p><small>Don't have an account yet?<a href='/register'> start</a></small></p>
        <br/>
        {!loading && <button type="submit" className="btn w-100" style={{ background: 'rgb(0, 166, 204)', color:'white' }} >LogIn</button>}
        {loading && <button type="submit" className="btn w-100" style={{ background: 'rgb(0, 166, 204)', color:'white' }} disabled >Loading...</button>}
      
      </form>
    </div>
    );
};

export default Login;