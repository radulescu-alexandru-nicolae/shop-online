export default class OrdersController{

    constructor(){
        this.orders=[];
        this.load();
    }
load=()=>{
    let obj=JSON.parse(localStorage.getItem("order"));
    if(obj!==null){
        obj.forEach(e=>{
            let ord=new Orders(e.id,e.customer_id,e.shopping_address,e.order_address,e.order_email,e.order_date,e.order_status)
            if(ord.customer_id!==undefined){
                this.orders.push(ord);
            }
        })
    }
}
    create=(customer_id,ammount,shopping_address,order_address,order_email,order_date,order_status)=>{
        let id;
        if(this.orders[this.orders.length-1]===undefined){
            id=0;
        }else{
            id=this.orders[this.orders.length-1].id+1;
         }
                let order=new Orders(id,customer_id,ammount,shopping_address,order_address,order_email,order_date,order_status);
                this.orders.push(order);
                window.localStorage.setItem("order",JSON.stringify(this.orders));
    }
    delete=(id)=>{
        this.orders.forEach(e=>{
            if(e.id===id){
                this.orders.pop(id);
            }
        })
        window.localStorage.removeItem("order");
        window.localStorage.setItem("order",JSON.stringify(this.orders));
    }
    update=(id,customer_id,ammount,shopping_address,order_address,order_email,order_date,order_status)=>{
        this.orders.forEach(e=>{
            if(e.id==id){
                e.customer_id=customer_id;
                e.ammount=ammount;
                e.shopping_address=shopping_address;
                e.order_address=order_address;
                e.order_date=order_date;
                e.order_email=order_email;
                e.order_status=order_status;
            }
        })
        window.localStorage.removeItem("order");
        window.localStorage.setItem("order",JSON.stringify(this.orders));
    }




}