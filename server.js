const express = require("express");
const proxy = require("express-http-proxy");

const app = express();
const PORT = 3333;

// Server bygd Storybook under /storybook
app.use("/storybook", express.static("storybook-static"));
// Omdiriger alle andre paths til kjørende Next.js
app.use("/", proxy("localhost:3000/"));

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});
