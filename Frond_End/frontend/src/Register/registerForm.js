import { useState } from 'react';

const Former_Rigister_Form=(validate)=>{
    const [errors, setErrors] = useState({});
const [formData, setFormData] = useState({
    userName:"",
    // state:"",
    // city:"",
    // place:"",
    userType:"",
    password:"",
    confirmPassword:"",
    phoneNo:""
});


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre)=>{
       return { ...pre,
        [name]: value
    }
    });
   setErrors(validate(formData));
}
const handleClick = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    console.log(formData)
}
return {formData,handleChange, handleClick, errors};
}

export default Former_Rigister_Form;
