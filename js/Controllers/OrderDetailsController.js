import OrderDetails from "../class/OrderDetails.js";
export default class OrderDetailsController{
    constructor(){
        this.orders=[];
        this.load();
    }


    create=(order_id,product_id,price,sku,quantity)=>{
        let id;
        if(this.orders[this.orders.length-1]===undefined){
            id=0;
        }else{
            id=this.orders[this.orders.length-1].id+1;
        }
        let order=new OrderDetails(id,order_id,product_id,price,sku,quantity);
        this.orders.push(order);
        window.localStorage.setItem("OrderDetails",JSON.stringify(this.orders));

    }

    load=()=>{
        let obj=JSON.parse(localStorage.getItem("OrderDetails"));
        if(obj!==null){
            obj.forEach(e=>{
                let orderDetail=new OrderDetails(e.id,e.order_id,e.product_id,e.price,e.sku,e.quantity);
                if(e.order_id!==null){
                    this.orders.push(orderDetail);
                }
            })
        }
    }

    delete=(id)=>{
        this.orders.forEach(e=>{
            if(e.id===id){
                this.orders.pop(e);
                window.localStorage.removeItem("OrderDetails");
                window.localStorage.setItem("OrderDetails",JSON.stringify(this.orders));
            }
        })
    }

    update=(id,order_id,product_id,price,sku,quantity)=>{
            this.orders.forEach(e=>{
                if(e.id===id){
                    this.orders.pop(id);
                    e.id=id;
                    e.order_id=order_id;
                    e.product_id=product_id;
                    e.price=price;
                    e.sku=sku;
                    e.quantity=quantity
                    this.orders.push(e);
                }
            })
            window.localStorage.removeItem("OrderDetails");
            window.localStorage.setItem("OrderDetails",JSON.stringify(this.orders));

    }
}
