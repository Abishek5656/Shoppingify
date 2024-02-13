import { Router } from "express";
import {
  // productCreated,
  allProducts,
  allCategoryList,
  CreateProduct
} from "../controllers/product.controllers.js";

const router = Router();

// router.route("/create").post(productCreated);

//create the product based on the categoryId or categoryName

router.route("/create").post(CreateProduct);


//get  all the products and displayed based on the catergory

router.route("/menu").get(allProducts); 

//get all category list in the DB

router.route("/categorey").get(allCategoryList)

//router.route("/product/:catergoryId/:productId").get(singleProduct)

export default router;
