class OrderDetails{
    constructor(id,order_id,product_id,price,sku,quantity){
        this.id=id;
        this.order_id=order_id;
        this.product_id=product_id;
        this.price=price;
        this.sku=sku;
        this.quantity=quantity;
    }
}
export default OrderDetails;