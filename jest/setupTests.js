const { toMatchImageSnapshot } = require("jest-image-snapshot");
const { toBeInTheDocument, toHaveClass } = require("jest-dom");

expect.extend({ toMatchImageSnapshot, toBeInTheDocument, toHaveClass });
