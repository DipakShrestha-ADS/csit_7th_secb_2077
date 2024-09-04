import CustomFormField from "../components/custom_form_field";
import "../styles/register.css"

const Register = () => {
    return (
        <div id="register-box">
            <h1 id="title"><span id="re">Re</span>gistration</h1>
            <div className="row-field">
                <CustomFormField label="Full Name" placeholder="Enter your full name" type="text" value="" cName="fullname" />
                <CustomFormField label="Username" placeholder="Enter your username" type="text" value="" cName="username" />
            </div>
            <div className="row-field">
                <CustomFormField label="Email" placeholder="Enter your email" type="text" value="" cName="email" />
                <CustomFormField label="Phone Number" placeholder="Enter strong Phone Number" type="text" value="" cName="phoneNumber" />
            </div>
            <div className="row-field">
                <CustomFormField label="Password" placeholder="Enter strong Password" type="text" value="" cName="password" />
                <CustomFormField label="Confirm Password" placeholder="Enter your Confirm Password" type="text" value="" cName="confirmPassword" />
            </div>
            <div className="gender-field">
                <p>Gender</p>
                <div id="gender">
                    <div className="g">
                        <input type="radio" name="gender" value="male" />
                        <label for="male">Male</label>
                    </div>
                    <div className="g">
                        <input type="radio" name="gender" value="female" />
                        <label for="female">Female</label>
                    </div>
                    <div className="g">
                        <input type="radio" name="gender" value="other" />
                        <label for="male">Other</label>
                    </div>
                </div>
            </div>
            <div id="reg-button">
                <input id="login-button" type="submit" value={"Register"} />
            </div>
        </div>
    );
}
export default Register