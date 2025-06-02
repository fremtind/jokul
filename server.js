import express from "express";
import proxy from "express-http-proxy";

const app = express();
const PORT = 3000;

// Server bygd Storybook under /storybook
app.use("/storybook", express.static("storybook-static"));
// Omdiriger alle andre paths til kjørende Next.js
app.use("/", proxy("localhost:3333/"));

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});
