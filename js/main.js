import ProductController from "./Controllers/ProductController.js";
import { loginF } from "./login.js";
import meniu_animation from "./meniu.js";
import {registerFunction} from "./register.js";
meniu_animation();
registerFunction();
const productController=new ProductController();
productController.create('asd','T-Shirt','23$','0.5kg','a product made of high quality materials','Shirt','2021-01-01','200');