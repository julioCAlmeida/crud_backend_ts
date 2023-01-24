import { prisma } from "../libs/prisma";
import { Request, Response } from "express";
import { z } from "zod";


export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const typeIdParams = z.object({
      id: z.string()
    })
    const typeItensBody = z.object({
      name: z.string(),
      category: z.string(),
      status: z.boolean(),
      quantify: z.number()
    })

    const { id } = typeIdParams.parse(request.params)

    const { name, category, status, quantify } = typeItensBody.parse(request.body)

    const exitsProduct = await prisma.product.findFirst({
      where: {
        id: id
      }
    })

    if(!exitsProduct) {
      return response.json("Produto não encontrado")
    }
      
    await prisma.product.update({
        where: {
          id: id
        },
        data: {
          name: name,
          category: category,
          status: status,
          quantify: {
            increment: quantify
          }
        }
      })
      response.json("Cadastro atualizado!")
  }
}