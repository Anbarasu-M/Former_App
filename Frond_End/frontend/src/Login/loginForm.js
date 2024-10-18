import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (validate) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: "",
        userType: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors(validate(formData));
    }
    const handleClick = (e) => {

        e.preventDefault();
        console.log("Login Clicked");
        if (formData.userName === "manbarasu825@gmail.com" && formData.password === "Manbu@825") {
            console.log("Login Success");  
            navigate("/product_upload"); 
            
        }
        else{
            console.log("Login Failed");   
            errors.InvalindCredentials = "Please Enter the Correct Credentials";
        }
        console.log(errors)
    }
    return { formData, handleChange, handleClick, errors };
}

export default Login;