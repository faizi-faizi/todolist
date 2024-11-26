// Assignment Details Part 1: Website Replication Replicate the Layout: Recreate the design and layout of the provided site: https://673ec18cdfa877f3853eac4e--nimble-gaufre-1c85fd.netlify.app/ Ensure the design and functionality match the reference site. Part 2: Form Validation and Navigation Add the following validations to the form: All required fields must be filled. Validate email format. Password must have at least 6 characters, one uppercase letter, and one special character. Display proper error messages for invalid input. Form Submission: On successful form submission, navigate the user to the To-Do Page. Part 3: To-Do Page Features Add Tasks: Allow users to add tasks using an input field. Display the tasks in a list. Mark as Complete: Add functionality to mark tasks as complete. Completed tasks should appear visually distinct (e.g., strikethrough or different color). Delete Tasks: Allow users to delete individual tasks from the list. Part 4: Hosting Host the Project on Netlify: Try hosting your project on Netlify using the available documentation or online resources. If you face any issues, don’t worry! I will explain the process step-by-step in an upcoming session.

const formSignUp = document.getElementById("signUpForm")

formSignUp.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    let isValid = true;

    const username = formSignUp.username.value

    const email = formSignUp.email.value
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const password = formSignUp.password.value
    const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    const confirmPassword = formSignUp.confirm.value

    if(username.trim().length<6){
        const errorMessage = document.getElementById('usernameError')
        errorMessage.innerText = "Enter a valid name"
    }

    if (!email.match(emailRegex)){
        const errorMessage = document.getElementById('emailError')
        errorMessage.innerText = "Enter a valid email address"

        isValid = false;
    }

    if(!password.match(passwordRegex)){
        const errorMessage = document.getElementById('passwordError')
        errorMessage.innerText = "Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character"

        isValid = false;
    }

    if(password !== confirmPassword){
        const errorMessage = document.getElementById('confirmError')
        errorMessage.innerText = "Passwords does not match"

        isValid = false;
    }
    
    if(isValid){
        formSignUp.submit()
        formSignUp.reset()
    }

})

let showStatus = false;
const showHideButton = document.getElementById('show')
showHideButton.addEventListener('click', ()=>{
    showStatus = !showStatus
    const showPassword = document.getElementById('password')
    showPassword.type = showStatus ? "text" : "password"
    showHideButton.innerHTML = showStatus ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
})

let showStatusConfirm = false;
const showHideButtonConfirm = document.getElementById('showw')
showHideButtonConfirm.addEventListener('click', ()=>{
    showStatusConfirm = !showStatusConfirm
    const showPasswordConfirm = document.getElementById('confirm')
    showPasswordConfirm.type = showStatusConfirm ? "text" : "password"
    showHideButtonConfirm.innerHTML = showStatusConfirm ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
})
