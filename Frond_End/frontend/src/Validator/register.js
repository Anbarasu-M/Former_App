
export default function validate(formData){
    const errors = {};
    if(!formData.userName.trim()){
         errors.userName = "UserName is required";
    }
    else if(formData.userName.length < 3){
        errors.userName = "UserName must be more than 3 characters";
    }

    console.log(formData.userType," anbu");
    if(formData.userType.trim() === ""){
        console.log(formData.userType);
        errors.userType = "User Type is required";
    }

    // if(!formData.state.trim()){
    //     errors.state = "State is required";
    // }
    // if(!formData.city.trim()){
    //     errors.city = "City is required";
    // }
    // if(!formData.place.trim()){
    //     errors.place = "Place is required";
    // }
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

    if(!formData.confirmPassword.trim()){
        errors.confirmPassword = "Confirm Password is required";
    }else if(formData.confirmPassword.trim() !== formData.password.trim()){
        errors.confirmPassword = "Password and Confirm Password must be same";
    }
    return errors;
}

