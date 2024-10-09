import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";


const app = express();
const port = 3001;



// Middleware
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static("public"));

// Connect to the database
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "book",
    password: "your-db-password",
    port: 5432
})
db.connect();


// get url of the image using open library api
async function getBookImageURL(ISBN){
    const response = await axios.get(`https://covers.openlibrary.org/b/ISBN/${ISBN}-L.jpg`);
    return response.config.url;
}

//sample data
const books = [
    {id: 1, book_name: "Harry Potter and the Philosopher's Stone", author: "j.k rowling", ISBN: 9780747532699, review: "GREAT BOOK", rating: 5},
    {id: 2, book_name: "Harry Potter and the Philosopher's Stone", author: "j.k rowling", ISBN: 9780747532699, review: "GOOD BOOK", rating: 4},
];

books.forEach(async book => {
    book['img_url'] = await getBookImageURL(book.ISBN);
})

app.get("/", async (req, res) => {
    console.log(books);
    res.render("index.ejs", {books: books});

})


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})