import express = require("express");
import morgan = require("morgan");

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
    console.log("dd")
}

app.get("/hello/:name", (req, res) => {
res.status(200)
        .json({
            status: "success",
            message: `hello ${req.params.name}`
        })
})

app.get("/", (req, res) => {
    res.status(200)
        .json({
            status: "success",
            message: "hello world"
        })
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
}) // brug anden port ved fejl