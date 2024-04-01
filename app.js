import express from "express";

import siginInUser from "./src/account/signin/signInRoutes.js";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/signin", siginInUser);


app.listen(PORT, ()=>{
    console.log(`the server is running on ${PORT}`);
});

