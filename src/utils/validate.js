export const checkValidData = (name,email,password, isLogin)=> {
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isLogin) {
        if (name.length === 0) {
            return "Name is required";
        }
    }
    if (!isEmailValid) return "Email is not valid";
    if (!isLogin) {
        if (!isPasswordValid) return "Password is not valid. It must be at least 8 characters long, with 1 uppercase letter, 1 lowercase letter, and 1 digit.";
    }

    return null;
}