import { prisma } from "../libs/prisma";
import { Request, Response } from "express"
import { z } from "zod";

export class FindOneProductController {
  async handle(request: Request, response: Response) {
    const typeIdParams = z.object({
      id: z.string()
    })

    const { id } = typeIdParams.parse(request.params)

    const findOneProductId = await prisma.product.findUnique({
      where: {
        id
      }
    })
    if(!findOneProductId) {
      return response.json("Produto não encontrado")
    }
    return response.json(findOneProductId)
  } 
}