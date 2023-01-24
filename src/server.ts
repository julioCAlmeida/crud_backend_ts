import express from "express";
import { routes } from './routes/product.routes';
import { getNameAndId } from "./API/api_ibge"

const app = express()

app.use(express.json())
app.use(routes)
app.use(getNameAndId)

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))