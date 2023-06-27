var openLogin = document.getElementById('login')
var signuppage = document.getElementById('signUpForm')
var loginpage = document.getElementById('logInForm')
var opensignup = document.getElementById('signUp')


openLogin.addEventListener('click',function(e){
signuppage.classList.add('slide-left');
loginpage.classList.remove('slide-left')

setTimeout(() => {
loginpage.style.zIndex='3';
signuppage.style.zIndex='-3';
    
}, 400);
})

opensignup.addEventListener('click',function(){

    loginpage.classList.add('slide-left');
signuppage.classList.remove('slide-left');
    
    setTimeout(() => {
        signuppage.style.zIndex='3';
loginpage.style.zIndex='-3';

        
    }, 400);
    })