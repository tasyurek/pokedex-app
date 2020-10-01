const express = require("express");
const path = require("path");

const port = process.env.PORT || 8080;

const buildFolderPath = path.join(__dirname, "client", "build");

const app = express();

//app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static(buildFolderPath));
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(buildFolderPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// npm config set registry http://registry.npmjs.org
