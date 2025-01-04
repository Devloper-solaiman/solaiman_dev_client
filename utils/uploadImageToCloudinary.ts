/* eslint-disable prettier/prettier */
// utils/cloudinary.ts

export const uploadImageToCloudinary = async (file: File): Promise<string> => {
  const cloudinary_url = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", `${upload_preset}`);
  formData.append("cloud_name", "darppljrh");

  const response = await fetch(`${cloudinary_url}`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
console.log("d2",data.url)
console.log("d3",data?.secure_url)
  return data?.secure_url;
};
