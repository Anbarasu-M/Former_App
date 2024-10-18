export default function validate(formData){
let error = {};
if (!formData.userName) {
    error.userName = "Username is required";
}
if(formData.userType.trim() === ""){
    console.log(formData.userType);
    error.userType = "User Type is required";
}
if (!formData.password) {
    error.password = "Password is required";
}
return error;
}