
const fs = require('fs');
const AWS = require('aws-sdk');
const path = require("path");
const glob = require("glob");
const nanoid = require('nanoid');


const upload = (file, id) => {
    const fileStream = fs.createReadStream(file);

    fileStream.on("error", function(err) {
        console.log("File Error", err);
    });

    const s3 = new AWS.S3();
    const UPLOAD_BUCKET = 'fremtind';
    const upload_path = `${id}/${path.basename(file)}`;


    s3.createBucket({ Bucket: UPLOAD_BUCKET, ACL: "public-read" }, function() {
        const params = { Bucket: UPLOAD_BUCKET, ACL: "public-read", Key: upload_path, Body: fileStream };

        s3.putObject(params, function(err) {
            if (err) console.log(err);
            else {
                console.log(`Uploaded image diff file to https://${UPLOAD_BUCKET}.s3.eu-north-1.amazonaws.com/${upload_path}`)
            };
        });
    });
};


class ImageReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onTestResult(_, testResult) {
    if (testResult.numFailingTests && testResult.failureMessage.match(/different from snapshot/)) {
        glob("./packages/**/__image_snapshots__/__diff_output__/*.png", {}, function(err, files) {
            if (err) {
                return console.error("error", err);
            }
            files.forEach( (image) => upload(image, nanoid()));
        });
    }
  }
}

module.exports = ImageReporter;