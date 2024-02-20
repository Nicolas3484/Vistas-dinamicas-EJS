const express = require('express');
const app = express()
const path= require("path")
const port = 3001

/* CONFIGS */

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,""))

/* MIDDLEWARE */

app.use(express.static("public"));

/* ROUTERS */

const otherRoutes = require("./routes/other.routes")

/*  ROUTES */

app.use("/", otherRoutes)

/* SERVER */

app.listen(port, () => console.log(`http://localhost:${port}`))