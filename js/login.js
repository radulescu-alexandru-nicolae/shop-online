import CustomerController from "./Controllers/CustomerController.js";
import ProductController from "./Controllers/ProductController.js";
const container_main=document.querySelector('.container-main');
const productController=new ProductController();
let text=`
<section class="register">
<h2>Register</h2>
<input type="text" placeholder="Your Email" class="email">
<input type="text" placeholder="Your Password" class="first-password">
<input type="text" placeholder="Confirm Passowrd" class="second-password">
<input type="text" placeholder="Your Full Name" class="full-name">
<input type="text" placeholder="Shipping Addres" class="shipping-addres">
<input type="text" placeholder="Country" class="country">
<input type="tel" placeholder="Your phone" class="phone">
<button class="create-account">Create account</button>
<p>If you have an account <span>Login</span></p>
</section>
`;
let custom=new CustomerController();
export function loginF(){
    const login=document.querySelector('.login');
    const button=document.querySelector('.login-button');
    const email=document.querySelector('.email');
    const password=document.querySelector('.first-password');
    const span=document.querySelector('p span');
    const item_section=document.querySelector('.item-section')
    button.addEventListener('click',(e)=>{  
        if(custom.connect(email.value,password.value)===true){
            container_main.innerHTML=productController.toCards();
        }else{
            email.style.border="1px solid red";
            password.style.border="1px solid red";
        }

    })

    span.addEventListener('click',(e)=>{
        span.addEventListener('click',(e)=>{
            container_main.innerHTML=text;
        })
    })
}

