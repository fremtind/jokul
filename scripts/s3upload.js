/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require("glob");
const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
/* eslint-enable @typescript-eslint/no-var-requires */

const upload = (file, timeStamp) => {
    const fileStream = fs.createReadStream(file);

    fileStream.on("error", function(err) {
        console.log("File Error", err);
    });

    const s3 = new AWS.S3();

    s3.createBucket({ Bucket: "fremtind", ACL: "public-read", GrantRead: "everyone" }, function() {
        const params = { Bucket: "fremtind", Key: `${timeStamp}/${path.basename(file)}`, Body: fileStream };

        s3.putObject(params, function(err, data) {
            if (err) console.log(err);
            else console.log("Successfully uploaded data to ", data);
        });
    });
};

glob("../packages/**/__image_snapshots__/__diff_output__/**/*.png", {}, function(er, files) {
    if (er) {
        return console.error("error", er);
    }
    const time = new Date();

    files.map((image) => upload(image, time));
});
