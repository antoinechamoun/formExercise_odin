const submitBtn = document.getElementById('submitBtn')
const pass = document.getElementById('pass')
const passMatch = document.getElementById('passMatch') 
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const mail = document.getElementById('mail')
const phone = document.getElementById('phone')
const emailError = document.querySelector("#pass + span.error");
const passInput = document.getElementById('pass')
const passInputM = document.getElementById('passMatch')

function checkPassword(e){
    e.preventDefault()
    if(!firstName.validity.valid){
        firstName.reportValidity()
    }else if(!lastName.validity.valid){
        lastName.reportValidity()
    }else if(!mail.validity.valid){
        mail.reportValidity()
    }else if(!phone.validity.valid){
        phone.reportValidity()
    }else if(!pass.validity.valid ){
        pass.reportValidity()
    }else if(!passMatch.validity.valid ){
        passMatch.reportValidity()
    }else if(pass.value !== passMatch.value){
        emailError.textContent = "*Password do not match";
        passInput.style.borderColor = 'red'
        passInputM.style.borderColor = 'red'
        emailError.style.color = 'red'
    }
}


submitBtn.addEventListener('click',checkPassword)
