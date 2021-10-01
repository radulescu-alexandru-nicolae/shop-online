class Product{
    constructor(id,sku,name,price,weight,descriptions,image,category,create_date,stock){
        this.id=id;
        this.sku=sku;
        this.name=name;
        this.price=price;
        this.weight=weight;
        this.descriptions=descriptions;
        this.image=image;
        this.category=category;
        this.create_date=create_date;
        this.stock=stock;
    }
    toCard=()=>{
        let text=`
        <article class="product">
        <img src="/img/unnamed.gif" alt="">
        <section class="container-information-product">
            <h2><span>Denumire:</span>denumire</h2>
            <h2><span>Price:</span>300$</h2>
        </section>
        <h2><span>Description:</span>a product made of high quality materials</h2>
    </article>
        `;
        return text;
    }
   
}
export default Product;