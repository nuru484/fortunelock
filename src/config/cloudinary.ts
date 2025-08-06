//src/config/cloudinary.ts
import {
  v2 as cloudinary,
  UploadApiResponse,
  DeleteApiResponse,
} from "cloudinary";
import ENV from "./env.js";

// Interface for environment variables
interface EnvConfig {
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
}

// Cloudinary configuration
cloudinary.config({
  cloud_name: (ENV as EnvConfig).CLOUDINARY_CLOUD_NAME,
  api_key: (ENV as EnvConfig).CLOUDINARY_API_KEY,
  api_secret: (ENV as EnvConfig).CLOUDINARY_API_SECRET,
});

// Function to upload files to Cloudinary
export const uploadFileToCloudinary = async (file: File): Promise<string> => {
  try {
    if (!file || !(file instanceof File) || file.size === 0) {
      throw new Error("Invalid file object. Ensure a valid file is provided.");
    }

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise<string>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error: Error | undefined, result?: UploadApiResponse) => {
          if (error || !result) {
            reject(
              new Error("Error uploading file to Cloudinary: " + error?.message)
            );
          } else {
            resolve(result.secure_url);
          }
        }
      );

      uploadStream.end(buffer);
    });
  } catch (error: unknown) {
    throw error instanceof Error ? error : new Error(String(error));
  }
};

// Function to delete a file from Cloudinary
export const deleteFileFromCloudinary = async (
  publicId: string
): Promise<DeleteApiResponse> => {
  try {
    const extractPublicId = (url: string): string =>
      url.split("/").slice(-1)[0].split(".")[0];
    const extractedPublicId = extractPublicId(publicId);

    const result: DeleteApiResponse = await cloudinary.uploader.destroy(
      extractedPublicId
    );
    console.log(`Cloudinary deletion result: ${JSON.stringify(result)}`);
    return result;
  } catch (error: unknown) {
    throw error instanceof Error ? error : new Error(String(error));
  }
};
