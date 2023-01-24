import { prisma } from "../libs/prisma";
import { Request, Response } from "express"
import { z } from "zod";

export class CreateProductController {
  async handle(request: Request, response: Response) {

    const createProductBody = z.object({
      name: z.string(),
      category: z.string(),
      status: z.boolean(),
      quantify: z.number()
    })

    const { name, category, status, quantify } = createProductBody.parse(request.body)

    const verifyNameExists = await prisma.product.findFirst({
      where: {
        name: name
      }
    })

    if(verifyNameExists?.name == name) {
      return response.json("Objeto já cadastrado")
    }

    const product = await prisma.product.create({
      data: {
        name,
        category,
        status,
        quantify,
        created_at: new Date(),
        updated_at: new Date(""),
        deleted_at: new Date("")
      }
    })
    return response.json(product)
  }
}