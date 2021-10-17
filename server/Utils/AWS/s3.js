import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAWFBD7LPW43NIVP7Z",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};



