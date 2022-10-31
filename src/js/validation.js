function captchaValidation(){
    if(grecaptcha.getResponse() != '') return true;

    alert('Selecione o Captcha')
}


function emailValidation(){
    var form = document.getElementById('form')
    var email = document.getElementById('email').value;
    var text = document.getElementById('spanEmail')
    var pattern  = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add("valida")
        form.classList.add("invalida")
        text.innerHTML = "Seu email é valido."
        text.style.color = "#0DE67B"
    }
    else{
        form.classList.add("valida")
        form.classList.add("invalida")
        text.innerHTML = "Seu email não é valido."
        text.style.color = "#ff0000"
    }

}