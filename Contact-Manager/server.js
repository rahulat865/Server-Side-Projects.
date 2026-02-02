const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use("/api/contacts" , require("./routes/contactroutes"));cd "C:\Users\rahul\OneDrive\Desktop\New folder\Backend Projects"
git clone <your-existing-repo-url> ExistingRepo

app.listen(port , () => {
    console.log(`server os running on port ${port}`)
});

