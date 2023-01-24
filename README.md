# Crud backend

O projeto consiste em criar um crud(create, read, update e delete) de um produto para o estoque. Dentro do projeto também foi consumida uma api do ibge do estado do Rio de Janeiro, que mostra os municípios existente no estado.

## Tecnologia utilizadas

- [express](https://expressjs.com/) para facilitar o desenvolvimento backend.
- [axios](https://www.npmjs.com/package/axios) para conexão com api externa.
- [prisma](https://www.prisma.io/) é um ORM para trabalhar com banco de dados de forma mais rápida.
- [typescript](https://www.typescriptlang.org/) que é um super set do javascript.

```bash
 npm install axios express
```
```typescript
npm install typescript prisma --save-dev
```

## Criaçao de um servidor com express

```express
import express

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Contribuição

Solicitações pull são bem-vindas. Para mudanças importantes, abra um problema primeiro
para discutir o que você gostaria de mudar.

Certifique-se de atualizar os testes conforme apropriado.

## License

[MIT](https://choosealicense.com/licenses/mit/)
