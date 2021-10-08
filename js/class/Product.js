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
        <article class="card">
                        <section class="dimon-shape">
                        <section class="price">$${this.price}</section>
                    </section>
                        <section class="photo">
                            <img src="/img/unnamed.gif" alt="">
                        </section>

                        <section class="text">
                            <article class="item-name">
                                <h2>${this.name}</h2>
                            </article>
                            <article class="sku">SKU | ${this.sku}</article>
                        </section>
                        <section class="view-more">
                            <article class="view">Viw More <span class="element">+</span></article>
                            <article class="text-more">
                                <p><span>Name:</span>${this.name}</p>
                                <p><span>SKU:</span>${this.sku}</p>
                                <p><span>Price:</span>${this.price}</p>
                                <p><span>Description:</span>${this.descriptions}</p>
                            </article>
                        </section>
                    </article>
      `
        return text;
    }
   
}
export default Product;