import Product from "../class/Product.js";
import Register from "./Register.js";

export default class Login{
    constructor(){
        this.container=document.querySelector('.container');
        this.container.innerHTML="";
        this.setNav();
        this.setHeader();
        this.setLogin();
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

        `

        
       this.container.appendChild(header);
      }

      setLogin=()=>{

        const login=document.createElement('main');
        login.innerHTML=`      
        <section class="login">
    <h2>Login</h2>
    <input type="text" placeholder="Your Email" class="email">
    <input type="text" placeholder="Your Password" class="first-password">
    <button class="login-button">Sign In</button>
    <p>If you want to create an account <span>Register</span></p>
    </section>
        `;
        

  
        this.container.appendChild(login);
     }

     handleClickNav=(e)=>{
        //  this.removeChild();
         let obj=e.target;
         if(obj.classList.contains("registerButton")){


             let reg= new Register();


         }else if(obj.classList.contains("homeButton")){
            let home=new Home();
         }
     }
    }