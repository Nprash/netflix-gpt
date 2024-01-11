

export const checkValidData = (email, password, isSignInForm, getpassword) =>{

    const isValidEmail = /^([a-zA-Z0-9,_%-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!getpassword){
         // Handle specific validation for forget password form if needed
    // For example, check if the email is valid or present in the system
   
    if(!isValidEmail) return "Invalid email id";

    } else {
        // Handle common validation for login and sign up forms
        if(!isValidEmail) return "Invalid email id";
        if(!isValidPassword) return "Password is not valid";

    }
    

    return null;
};


