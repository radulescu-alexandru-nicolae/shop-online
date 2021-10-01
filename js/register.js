import CustomerController from "./Controllers/CustomerController.js";
import { loginF } from "./login.js";
const container_main=document.querySelector('.container-main');
const register=document.querySelector('.register');
export  function isValidPassword(password){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}
export function isValidEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function isValidFullName(name){
    return /^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/.test(name);
}
function isNotBlank(name){
    return /^(?!\s*$).+/.test(name);
}
function validOrNot(show,element){
    if(show){
        element.style.border="1px solid rgb(255, 106, 77)";
        element.style.background="red";
    }else{
        element.style.border="1px solid black";
        element.style.background="unset";
    }
}
const email=document.querySelector('.email');
const password=document.querySelector('.first-password');
const second_password=document.querySelector('.second-password');
const full_name=document.querySelector('.full-name');
const country=document.querySelector('.country');
const phone=document.querySelector('.phone');
const shipping_addres=document.querySelector('.shipping-addres');
const button=document.querySelector('.create-account');

const span=document.querySelector('p span');
const login=`
<section class="login">
<h2>Login</h2>
<input type="text" placeholder="Your Email" class="email">
<input type="text" placeholder="Your Password" class="first-password">
<button class="login-button">Sign In</button>
<p>If you want to create an account <span>Register</span></p>
</section>
`;
let customController=new CustomerController();
let check=0;
export function registerFunction()
{
button.addEventListener("click",(e)=>{
    if(isValidEmail(email.value)===true){
    validOrNot(!isValidEmail(email.value),email);
    check++;
}
if(isValidFullName(full_name.value)===true){
    validOrNot(!isValidFullName(full_name.value),full_name);
    check++;
}
if(isValidPassword(password.value)===true){
    validOrNot(!isValidPassword(password.value),password);
    check++;
}
if(password.value===second_password.value){
    validOrNot(false,second_password);
    check++;
}else{
    validOrNot(true,second_password);
}
if(isNotBlank(shipping_addres.value)===true){
    check++;
}
if(isNotBlank(country.value)===true){
    check++;
}
if(check>=6){
    customController.create(email.value,password.value,full_name.value,shipping_addres.value,customController.value,phone.value);
    container_main.innerHTML=login;
}else{
    check=0;
}
}) 
}
span.addEventListener('click',(e)=>{
    container_main.innerHTML=login;
    checkLogin();
})
function checkLogin(){
    if(document.querySelector('.login-button')!==null){
        loginF();
    }else{
        console.log('b');
    }
}