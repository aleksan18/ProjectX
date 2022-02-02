const express = require("express");
const mongoose = require("mongoose");
const https = require('https');
const fs = require("fs");
const path = require("path");
const cors =require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/slack", require("./routes/slack.routes"));
app.use("/api/hubspot", require("./routes/hubspot.routes"));
app.use("/api/shopify", require("./routes/shopify.routes"));
app.use("/api/google", require("./routes/google.routes"));
app.use("/api/organisation", require("./routes/organisation.routes"));
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
 var key = fs.readFileSync(__dirname + '/certs/client-key.pem');
 var cert = fs.readFileSync(__dirname + '/certs/client-cert.pem');
 var options = {
    key: key,
    cert: cert
  };
 var server = https.createServer(options, app);
async function start() {
  try {
     await mongoose.connect(process.env.MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false,
     });
     server.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
