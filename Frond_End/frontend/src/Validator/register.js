
export default function validate(formData){
    const errors = {};
    if(!formData.userName){
         errors.email = "UserName is required";
    }

    if(!formData.state.trim()){
        errors.state = "State is required";
    }
    if(!formData.city.trim()){
        errors.city = "City is required";
    }
    if(!formData.place.trim()){
        errors.place = "Place is required";
    }
    if(!formData.phoneNo.trim()){
        errors.phoneNo = "Phone No is required";
    }else if(formData.phoneNo.length !== 10){
        errors.phoneNo = "Phone No must be 10 digits";
    }
    if(!formData.password){
        errors.password = "Password is required";   
    }else if(formData.password.length < 6){
        errors.password = "Password must be more than 6 characters";
    }

    if(!formData.confirmPassword){
        errors.confirmPassword = "Confirm Password is required";
    }else if(formData.confirmPassword !== formData.password){
        errors.confirmPassword = "Password and Confirm Password must be same";
    }
    return errors;
}

