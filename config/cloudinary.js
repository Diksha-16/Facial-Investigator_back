const cloudinary = require("cloudinary").v2;
/* Enter your own credentials */
cloudinary.config({
  cloud_name: "dfpelbyan",
  api_key: "339913417734739",
  api_secret: "QTTesRVjlvfGAUi2bVr5Lp-gOJs",
});

module.exports = { cloudinary };
