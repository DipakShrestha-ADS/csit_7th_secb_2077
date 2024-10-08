import { useState } from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'
import CustomFormField from '../components/custom_form_field'
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
                <CustomFormField label="Email" placeholder="Enter your email" type="email" value={email} cName="email" onChange={handleOnEmailChange}/>
                <CustomFormField label="Password" placeholder="Enter your password" type="password" value={password} cName="password" onChange={handleOnPasswordChange}/>
                <div>
                    <input id='login-button' type='submit' value="Login" />
                    <p style={{ textAlign: 'center', color: 'teal', fontSize: '14px', marginTop: '15px'}}>Already have an account? <Link to='/register'>Sign Up</Link></p>
                </div>
            </div>
        </form>
    );
}
export default Login