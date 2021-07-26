import { Router } from 'https://deno.land/x/oak/mod.ts';
import {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} from "./controller.ts";

const router = new Router();
router
  .get("/books", getAllBooks)
  .get("/books/:isbn", getBook)
  .post("/books", addBook)
  .put("/books/:isbn", updateBook)
  .delete("/books/:isbn", deleteBook);

export default router;
