import app from "./app.js";

app.listen(4567, err => {
   console.log(err ? err : "Server is listen on port 4567");
});