const express = require("express");
const app = express();
const {Create, Read, Update, Delete} = require("./controllers/messages_controller");

app.use(express.json());
app.use(express.static('public/build'));

app.get("/api/messages", Read);

app.post("/api/messages", Create);

app.put("/api/messages/:id", Update);

app.delete("/api/messages/:id", Delete);

const PORT = 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`))