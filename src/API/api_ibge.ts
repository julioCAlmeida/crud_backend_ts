import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface Municipio {
  id: number,
  nome: string
}

async function getNameAndId() {
  await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios").then((response) => {
    const municipios: Municipio[] = response.data
    municipios.forEach((municipio: Municipio) => {
      prisma.municipio.create({
        data: {
          id: municipio.id,
          name: municipio.nome
        }
      })
    })   
  })
}
getNameAndId()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export { getNameAndId }