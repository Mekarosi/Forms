function validateSignUp() {
    var fname = document.getElementById('firstName');
    var lname = document.getElementById('lastName');
    var age = document.getElementById('age');
    var password = document.getElementById('password');
    var email = document.getElementById('email');
    var tandc = document.getElementById('tandc');

    if  (fname.value === "") {
        alert("First name is required");
        return false;
    }
        else if(lname.value === "") {
            alert("Last name is required");
            return false;
        }

        else if( password.value === "" && password.value.length < 6) {
            alert("Weak password");
            return false; 
        }

        else if( email.value === "" && !email.value.includes("@")) {
            alert("Invalid email format");
            return false; 
        }

        else if (Number(age.value) === 0 || Number(age.value) < 0) {
        alert("Age must be greater than zero");
        }
        else if(!tandc.value){
        alert("Please agree to term and condition");
        return false;

       } else {
        return true;
       }
}