import '../styles/login.css'
const Login = ()=>{
    return(
        <div id="container">
            <div className='field'>
                <label for="email">Email</label><br/>
                <input type='email' placeholder="Enter your email" name='email'/>
            </div>
            <div className='field'>
                <label for="password">Password</label><br/>
                <input type='password' placeholder='Enter your password' name='password'/>
            </div>
            <div>
                <input id='login-button' type='submit' value="Login"/>
            </div>
        </div>
    );
}
export default Login