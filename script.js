submitBtn= document.getElementById("submitBtn")
nameError= document.getElementById("nameError")
emailError= document.getElementById("emailError")
passError= document.getElementById("passError")

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(check() && check2() && check3()){
        alert("Entered Succesfully.")
    }
})

function check(){
    let name= document.getElementById("name").value
    if(name.length==0){
        nameError.innerHTML= "Please Enter the Name."
        nameError.previousElementSibling.classList.add("fa-xmark")
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML= "Enter Full Name"
        nameError.previousElementSibling.classList.add("fa-xmark")
        return false
    }
    
    nameError.innerHTML=""
    nameError.previousElementSibling.classList.add("fa-check")

    return true
}

function check2(){
    let email= document.getElementById("email").value
    if(email.length==0){
        emailError.innerHTML="Please Enter Something."
        emailError.previousElementSibling.classList.add("fa-xmark")
        return false
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML="Please Enter Valid Email."
        emailError.previousElementSibling.classList.add("fa-xmark")
        return false
    }
    
    emailError.innerHTML=""
    emailError.previousElementSibling.classList.add("fa-check")
    return true
}

function check3(){
    let password= document.getElementById("password").value
    
    if(password.length==0){
        passError.innerHTML="Please Enter Something."
        passError.previousElementSibling.classList.add("fa-xmark")
        return false
    }
    
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML="Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 symbol"
        passError.previousElementSibling.classList.add("fa-xmark")
        return false
    }

    passError.innerHTML=""
    passError.previousElementSibling.classList.add("fa-check")
    return true
}