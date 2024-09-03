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
                <CustomFormField label="Full Name" placeholder="Enter your full name" type="text" value="" cName="fullname" />
                <CustomFormField label="Username" placeholder="Enter your username" type="text" value="" cName="username" />
            </div>
            <div className="row-field">
                <CustomFormField label="Full Name" placeholder="Enter your full name" type="text" value="" cName="fullname" />
                <CustomFormField label="Username" placeholder="Enter your username" type="text" value="" cName="username" />
            </div>
        </div>
    );
}
export default Register