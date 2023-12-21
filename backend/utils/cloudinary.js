const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const  uploadOnCloudinary = async (localFilePath) => {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        },
        (error, result) => console.log(result)
        )

        console.log("file uploaded on cloudinary", response.url);
        return response;
    }


module.exports = uploadOnCloudinary