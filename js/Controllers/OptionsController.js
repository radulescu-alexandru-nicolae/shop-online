import Options from "../class/Options.js";
export default class OptionsController{
    constructor(){
        this.options=[];
        this.load();
    }

    load=()=>{
        let obj=JSON.parse(localStorage.getItem("options"));
        if(obj!==null){
            obj.foreach(e=>{
                let option=new Options(e.id,e.option_name);
                if(option.option_name!==null){
                    this.options.push(option);
                }
            })
        }
    }

    create=(option_name)=>{
        let id;
        if(this.options[this.options.length-1]===undefined){
            id=0;
        }else{
            id=this.options[this.options.length-1].id+1;
        }

        let option=new Options(option_name);
        this.options.push(option);
        

        window.localStorage.setItem("options",JSON.stringify(this.options));
    }

    delete=(id)=>{
        this.options.forEach(e=>{
            if(e.id===id){
                this.options.pop(id);
            }
        })
        window.localStorage.removeItem("options");
        window.localStorage.setItem("options",JSON.stringify(this.options));
    }





}