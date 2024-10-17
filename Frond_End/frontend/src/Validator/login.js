export default function validate(formData){
let error = {};
if (!formData.userName) {
    error.userName = "Username is required";
}
if (!formData.password) {
    error.password = "Password is required";
}
return error;
}