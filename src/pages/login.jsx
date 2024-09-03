import { useState } from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
        if (password.length < 6) {
            alert("Password must be at least 6 characters long")
            return
        }
        console.log(email, password)
    }
    const handleOnEmailChange = (e) => {
        console.log("emal : ", e.target.value)
        setEmail(e.target.value)
    }
    const handleOnPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div id="container">
                <div className='field'>
                    <label for="email">Email</label><br />
                    <input type='email' placeholder="Enter your email" name='email' onChange={handleOnEmailChange} value={email} required />
                </div>
                <div className='field'>
                    <label for="password">Password</label><br />
                    <input type='password' placeholder='Enter your password' name='password' onChange={handleOnPasswordChange} value={password} required />
                </div>
                <div>
                    <input id='login-button' type='submit' value="Login" />
                    <p style={{ textAlign: 'center', color: 'teal', fontSize: '14px', marginTop: '15px'}}>Already have an account? <Link to='/register'>Sign Up</Link></p>
                </div>
            </div>
        </form>
    );
}
export default Login