import axios from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
const UploadImage = async (img: any) => {
    const imageFile = new FormData();
    imageFile.append("image", img);
    const response = await axios.post("https://api.imgbb.com/1/upload?key=3b185f8a7f164fa5acafabcec201a8ef", imageFile);
    return response.data.data.display_url;
}

export default UploadImage;