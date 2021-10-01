import CustomerController from "./Controllers/CustomerController.js";

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
function handle(validator){
    return e=>{
        const text=e.target.value;
        const valid=validator(text);
        const show=text!==""&&!valid;
        validOrNot(show,e.target);
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


let customController=new CustomerController();
export function registerFunction()
{
email.addEventListener("input",handle(isValidEmail));
    password.addEventListener("input",handle(isValidPassword));
    full_name.addEventListener("input",handle(isValidFullName));
    country.addEventListener("input",handle(isNotBlank));
    
    second_password.addEventListener("input",(e)=>{
        if(second_password.value!==password.value){
            validOrNot(true,second_password);
        }else{ 
              validOrNot(false,second_password);
        }
    })

    button.addEventListener("click",(e)=>{
        console.log('a');
        customController.create(email.value,password.value,full_name.value,shipping_addres.value,country.value,phone.value);

    })
  
}