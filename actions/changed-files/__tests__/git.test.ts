import fs from "fs";
import path from "path";
import { expect, test } from "@jest/globals";
import { findChangedFiles } from "../src/git";

beforeAll(() => {
    fs.writeFileSync(path.join(__dirname, "..", "__testing_ground__/existing/__image_snapshots__/new.txt"), "hello");

    fs.mkdirSync(path.join(__dirname, "..", "__testing_ground__/new/__image_snapshots__/"), {
        recursive: true,
    });
    fs.writeFileSync(path.join(__dirname, "..", "__testing_ground__/new/__image_snapshots__/new.txt"), "hello");
});

afterAll(() => {
    fs.rmSync(path.join(__dirname, "..", "__testing_ground__/new/"), {
        force: true,
        recursive: true,
    });

    fs.rmSync(path.join(__dirname, "..", "__testing_ground__/existing/__image_snapshots__/new.txt"));
});

test("finds the expected files", async () => {
    const pattern = "**/__image_snapshots__/*";

    const matches = await findChangedFiles([pattern]);
    expect(matches).toHaveLength(2);

    const expectedMatches = [
        "actions/changed-files/__testing_ground__/existing/__image_snapshots__/new.txt",
        "actions/changed-files/__testing_ground__/new/__image_snapshots__/new.txt",
    ];

    expectedMatches.forEach((expected) => expect(matches).toContain(expected));
});
