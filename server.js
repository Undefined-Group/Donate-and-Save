const express = require("express");
const cors = require("cors");
// const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, 'React/build')));
app.use(express.json());
app.use(cors());

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + "/React/build/index.html"));
// });

app.use("/delete", require("./server/delete"));
app.use("/addDonor", require("./server/addDonor"));
app.use("/search", require("./server/search"));
app.use("/report", require("./server/report"));


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`)); 
