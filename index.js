const express = require("express")
const app = express();
app.use(express.json())
const router = require("./routes/routes")
app.use(router)


const port = 9000;


app.listen(port, () => {
    console.log('rodando...')
})

