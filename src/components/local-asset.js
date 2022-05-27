import cloudinary from "cloudinary"

// require("dotenv").config();

// const cloudinary = require("cloudinary")

cloudinary.config({
    cloud_name: 'dlzkfpxdf',
    api_key: '742319917443717',
    api_secret: '3azXyeM7grC0k0scXvIWzgKrlhI'
  });

  cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

console.log(cloudinary.config().cloud_name);

// cloudinary.v2.uploader.upload(
//   "https://www.example.com/mysample.jpg",
//   { public_id: "sample_woman" },
//   function (error, result) {
//     console.log(error);
//   }
// );


export {}