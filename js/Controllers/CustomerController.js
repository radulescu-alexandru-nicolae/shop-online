import Customers from "../class/Customers.js";
export default class CustomerController{
    constructor(){
        this.customers=[];
        this.load();
    }
    afisare=()=>{
        this.customers.forEach(e=>e.afisare());
    }
    create=(email,password,full_name,shipping_addres,country,phone)=>{
        let id;
        if(this.customers[this.customers.length-1]===undefined){
            id=0;
          }else{
              id=this.customers[this.customers.length-1].id+1;
          }
          let custom=new Customers(id,email,password,full_name,shipping_addres,country,phone);
          if(this.checkEmail(custom.email)===false){
              this.customers.push(custom);
              window.localStorage.setItem("account",JSON.stringify(this.customers));
              return true;
          }else{
              return false;
          }
    }
    load=()=>{
        let obj=JSON.parse(localStorage.getItem("account"));
        if(obj!==null){
            obj.forEach(e=>{
                let cust=new Customers(e.id,e.email,e.password,e.full_name,e.shipping_addres,e.country,e.phone);
                if(cust.email!==undefined){
                    this.customers.push(cust);
                }
            })
        }
    }
    checkEmail(email){
        let ok=0;
        this.customers.forEach(e=>{
            if(e.email===email){
                ok=1;
            }
        });
        if(ok===1){
            return true;
        }
        return false;
    }
    connect=(email,password)=>{
        let ok=0;
        this.customers.forEach(e=>{
            if(e.email===email&&e.password===password){
                ok=1;
            }
          
        })
        if(ok===1){
            return true;
        }else{
            return false;
        }
    
    }
}