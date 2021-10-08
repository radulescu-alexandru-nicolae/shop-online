import Product from "../class/Product.js";
export default class ProductController{
    constructor(){
        this.item_section=document.querySelector('.item-section');
        this.products=[];
        this.load();
    }
    load=()=>{
        let obj=JSON.parse(localStorage.getItem("product"));
        if(obj!==null){
            obj.forEach(e=>{
                let prod=new Product(e.id,e.sku,e.name,e.price,e.weight,e.descriptions,e.image,e.category,e.create_date,e.stock);
                if(prod.name!==undefined){
                    this.products.push(prod);
                }
            })
        }
    }
    create=(sku,name,price,weight,descriptions,image,category,create_date,stock)=>{
        console.log('a');
        let id;
        if(this.products[this.products.length-1]===undefined){
            id=0;
        }else{
            id=this.products[this.products.length-1].id+1;
        }
        let product=new Product(id,sku,name,price,weight,descriptions,image,category,create_date,stock);
          this.products.push(product);
        window.localStorage.setItem("product",JSON.stringify(this.products));
    }

    delete=(id)=>{
        this.products.forEach(e=>{
            if(e.id===id){
                this.products.pop(id);
            }

        })
        window.localStorage.removeItem("product");
        window.localStorage.setItem("product",JSON.stringify(this.products));
    }

    setHome=()=>{
        this.item_section.innerHTML+=this.toCards();
    }
    toCards(){
        let text=``;
        for(let i=0;i<this.products.length;i++){
            text+=this.products[i].toCard();
        }
        return text;
    }
}