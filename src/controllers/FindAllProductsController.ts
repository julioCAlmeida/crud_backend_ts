import { prisma } from "../libs/prisma";
import { Request, Response } from "express"

export class FindAllProductsController {
  async handle(request: Request, response: Response) {

    const findAllProducts = await prisma.product.findMany()

    if(!findAllProducts) {
      return response.json("Estoque vazio")
    }

    return response.json(findAllProducts)
  }
}