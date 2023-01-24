import { prisma } from "../libs/prisma";
import { Request, Response } from "express";
import { z } from "zod"

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const findProductParams = z.object({
      id: z.string()
    })

    const { id } = findProductParams.parse(request.params)

    const findOneProduct = await prisma.product.findFirst({
      where: {
        id
      }
    })
    if(!findOneProduct) {
      return response.json("Produto não encontrado")
    }
    await prisma.product.delete({
      where: {
        id: id
      }
    })
    return response.json("Produto deletado com sucesso!")
  }
}