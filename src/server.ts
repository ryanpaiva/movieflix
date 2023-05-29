import express from "express";

const port = 3000;
const app = express();

app.get("/movies", (req, res) => {
    res.send("Listagem de filmes");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});