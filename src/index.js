import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
const port = app.listen(8000);
console.log("Server is listening in the port http://localhost:", 8000);