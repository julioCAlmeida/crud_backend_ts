import { Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";
import { FindOneProductController } from "../controllers/FindOneProductController";
import { FindAllProductsController } from "../controllers/FindAllProductsController";
import { DeleteProductController } from "../controllers/DeleteProductController";
import { UpdateProductController } from "../controllers/UpdateProductController";

const routes = Router()

const createProduct = new CreateProductController()
const findOneProduct = new FindOneProductController()
const findAllProducts = new FindAllProductsController()
const deleteProduct = new DeleteProductController()
const updateproduct = new UpdateProductController()

routes.post("/product", createProduct.handle)
routes.get("/product/:id", findOneProduct.handle)
routes.get("/product", findAllProducts.handle)
routes.delete("/product/:id", deleteProduct.handle)
routes.put("/product/:id", updateproduct.handle)

export { routes };