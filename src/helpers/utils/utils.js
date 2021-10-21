

const checkValidEmail = (email) => {
    // eslint-disable-next-line
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    return validEmailRegex.test(email);
 };

 const checkPassword = (password) => password.length > 5; 

 export{
     checkValidEmail,
     checkPassword
 }