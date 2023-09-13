import { supabase } from "./client"

const supabaseBucket = import.meta.env.VITE_STORAGE_BUCKET

// Upload file using standard upload
async function uploadFile(file: File) {
  // retrieve data and error
  const { error } = await supabase.storage
    .from(supabaseBucket)
    .upload("file_path", file)
  if (error) {
    // Handle error
  } else {
    // Handle success
  }
}
export { uploadFile }
