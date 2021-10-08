import Categories from "../class/Categories.js";
export default class CategoriesController{

constructor(){
    this.categories=[];
    this.load();    

    console.log(this.categories);

}

create=(name,description)=>{
    let id;
    if(this.categories[this.categories.length-1]===undefined){
        id=0;
    }else{
        id=this.categories[this.categories.length];
    }

    let categ=new Categories(id,name,description);
    this.categories.push(categ);
    window.localStorage.setItem("categories",JSON.stringify(this.categories));

}
load=()=>{
    let obj=JSON.stringify(localStorage.getItem("categories"));
    if(obj!==null){
        obj.forEach(e=>{
            let categ=new Categories(e.id,e.name,e.description);
            if(categ.name!==null){
                this.categories.push(categ);
            }
        })
    }
}
delete=(id)=>{
    this.categories.forEach(e=>{
        if(e.id===id){
            this.categories.pop(id);
         
        }
    })
    window.localStorage.removeItem("categories");
    window.localStorage.setItem("categories",JSON.stringify(this.categories));
}
update=(id,name,description)=>{
    this.categories.forEach(e=>{
        if(e.id===id){
            this.categories.pop(id);
            e.id=id;
            e.name=name;
            e.description=description;
        }
        window.localStorage.removeItem("categories");
        window.localStorage.setItem("categories",JSON.stringify(this.categories));
    })
}
}