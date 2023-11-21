import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadFileOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const result = await cloudinary.v2.uploader.upload(localFilePath, {
            resource_type: auto,
        })
        console.log("file has been uploaded successfully at: ", result.url)
        return result
    } catch (error) {
        fs.unlinkSync(localFilePath) //removes the locally save temp file as upload operation fails
        return null
    }
}

export { uploadFileOnCloudinary }
