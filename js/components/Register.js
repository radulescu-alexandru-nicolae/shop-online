import Product from "../class/Product.js";
import Login from "./Login.js";
import Home from "./Home.js";
export default class Register{
    constructor()
    {
        this.container=document.querySelector('.container');
        this.container.innerHTML=``;
        this.setNav();
        this.setHeader();
        this.setRegister();
        this.register=document.querySelector('.registerButton');
        this.login=document.querySelector('.signIn');
        this.home=document.querySelector('homeButton');
        this.nav=document.querySelector('nav');
        this.nav.addEventListener('click',this.handleClickNav);
        
    }

    setNav=()=>{
        const nav=document.createElement('nav');
        nav.innerHTML=`
        <section class="container-nav">
        <img src="/img/logo.PNG" alt="" class="logo">
    
        <article class="meniu">
            <div class="container-span">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </article>
        <ul>
            <li class="homeButton">Home</li>
            <li class="registerButton">Register</li>
            <li class="signIn">Sign In</li>
            <li>Cart
                <i class="fas fa-cart-arrow-down"></i>
            </li>
        </ul>
    </section>
        `
         this.container.appendChild(nav);
    
     }

     setHeader=()=>{
        const header=document.createElement('header');

        header.innerHTML=`
        <section class="container-header">
        <ul>
            <li>Sneakers</li>
            <li>Womens</li>
            <li>Childrens</li>
            <li>Coustume</li>
        </ul>
        
        <article class="search">
           <input type="text" placeholder="Search">
           <i class="fas fa-search"></i>
        </article>
        
        </section>
        <section class="poster">
        <img src="img/shop-online.jpg" alt="">
        </section>
        `;
        
       this.container.appendChild(header);
      }

      setRegister=()=>{
          const register=document.createElement('main');
        
    register.innerHTML=`
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
        `
        this.container.appendChild(register);
      }
      handleClickNav=(e)=>{
        //  this.removeChild();
         let obj=e.target;
         if(obj.classList.contains("homeButton")){
            let home=new Home();
         }else if(obj.classList.contains("signIn")){
             let login=new Login();
         }else if(obj.classList.contains("registerButton")){
           

         }
     }
    }
