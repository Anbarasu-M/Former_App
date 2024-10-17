import { useState } from "react";
const Login = (validate)=>{
    console.log("Login");
    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors(validate(formData));
    }
    const handleClick = (e) => {
        e.preventDefault();
    }
    return {formData,handleChange,handleClick,errors};
}

export default Login;