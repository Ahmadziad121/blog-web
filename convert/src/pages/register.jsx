import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './register.css'
function Register() {
    const [username, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [redirect, setRedirect]=useState(false);
  
  async function handleRegister(e) {
      e.preventDefault()
      if(password===confirmPassword){
      const res=await fetch('http://localhost:9000/register',{
      method:'POST',
      body: JSON.stringify({username, email, password}),
      headers:{'Content-Type':'application/json'}
    })
    setRedirect(true)
  }
  else{
    alert('Password and confirm password do not match')
  }
  }
  
  if(redirect){
    return <Navigate to={'/login'} />
  }
  
  return ( 
    <div class="login-box">
      <h2>Register</h2>
      <form  onSubmit={handleRegister}>
        
        <div class="user-box">
        <input type='text' name="username" required value={username} onChange={e=>setName(e.target.value)} id="username"/>
        <label>Username</label>
        </div>
        <div class="user-box">
        <input type='email' name="email" required value={email} onChange={e=>setEmail(e.target.value)} id="email"/>
        <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" name="password" required  value={password} onChange={e=>setPassword(e.target.value)} id="password"/>
          <label>Password</label>
        </div>
        <div class="user-box">
            <input name="confirmpassword" type="password" required value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}  id="confirmpassword" />
            <label >Confirm Password</label>
            </div>
            <button type="submit"  style={{ background: 'rgb(0, 166, 204)', color:'white' }} >Register</button>
           <div> <p><small>Already have an account?<a className='a' href='/login'> Login</a></small></p></div>
        <br/>
        </form>
        </div>)}

export default Register;        