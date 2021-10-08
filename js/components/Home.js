import Product from "../class/Product.js";
import Register from "./Register.js";
import Login from "./Login.js";

export default class Home{

constructor(){
    this.produse=JSON.parse(localStorage.getItem('product'));
    this.container=document.querySelector('.container');
    this.container.innerHTML=``;
   this.setNav();
   this.setHeader();
   this.setMain(); 
   this.register=document.querySelector('.registerButton');
this.login=document.querySelector('.signIn');
this.home=document.querySelector('homeButton');
this.nav=document.querySelector('nav');
this.nav.addEventListener('click',this.handleClickNav);

this.lista_carduri=document.querySelector('.lista-carduri');
this.ulButoane=document.querySelector('.buttons ul');

this.displayOff();

this.createCarduri(1);
this.displayCarduri();

this.modify();

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

      setMain=()=>{
        const main=document.createElement('main');
        main.appendChild(this.setContainerMain());
         this.container.appendChild(main);
     }
     setContainerMain=()=>{
         const container_main=document.createElement('article');
         container_main.className='container-main';
         container_main.appendChild(this.setListaCarduri());
         container_main.appendChild(this.setUlButtons());
         
         return container_main;
     }   
     setListaCarduri=()=>{
         const lista_carduri=document.createElement('section');
         lista_carduri.className='lista-carduri';
         this.produse.forEach(e=>{
             let produs=new Product(e.id,e.sku,e.name,e.price,e.weight,e.descriptions,e.image,e.category,e.create_date,e.stock);
            lista_carduri.innerHTML+=produs.toCard();
  
          })
         return lista_carduri;
     }
 
     setUlButtons=()=>{
         const section=document.createElement('section');
         section.className="buttons";
         const ul=document.createElement('ul');
         let maxButoane=Math.ceil(this.produse.length/6);
         let nr=0;
         nr+=nr;
         for(let i=0;i<maxButoane;i++){
             nr++;
             let li=document.createElement('li');
             li.textContent=nr;
             ul.appendChild(li);
         }
         
         section.appendChild(ul);



     
         return section;
 
     }
     displayOff=()=>{
        for(let i=0;i<this.lista_carduri.children.length;i++){
          this.lista_carduri.children[i].style.display="none";
        }
      }

      createCarduri=(numar)=>{
        this.vector=[];
       
           let nr=0;
           nr+=nr;
           numar=parseInt(numar);
           if(numar===1){
               this.displayOff();
               nr=6;
               for(let i=0;i<nr;i++){
                this.vector.push(this.lista_carduri.children[i]);
           }
       }
       else{
           this.displayOff();
           nr=(numar-1)*6;
           for (let i = nr; i < (nr + 6); i++) {
               if(this.lista_carduri.children[i]!==undefined){
                   this.vector.push(this.lista_carduri.children[i]);
   
               }
           }
       }
   }

   displayCarduri=()=>{
            
    for(let i=0;i<this.vector.length;i++){
        this.vector[i].style.display="grid";
    }
}

modify=()=>{
    this.ulButoane.addEventListener('click',(e)=>{
        if(e.target.tagName==='LI'){
            this.createCarduri(e.target.textContent);
            this.displayCarduri();
        }
    })
}
     handleClickNav=(e)=>{
        //  this.removeChild();
         let obj=e.target;
         if(obj.classList.contains("registerButton")){


             let reg= new Register();


         }else if(obj.classList.contains("homeButton")){
            
         }else if(obj.classList.contains("signIn")){
             let login=new Login();
         }
     }







}