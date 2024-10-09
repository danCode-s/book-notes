import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static("public"));

const books = [
    {id: 1, book_name: "Harry Potter and the Philosopher's Stone", author: "j.k rowling", ISBN: 9780747532699, review: "GREAT BOOK", rating: 5},
    {id: 2, book_name: "Harry Potter and the Philosopher's Stone", author: "j.k rowling", ISBN: 9780747532699, review: "GOOD BOOK", rating: 4},
];

app.get("/", (req, res) => {
    res.render("index.ejs", {books: books});
})


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})