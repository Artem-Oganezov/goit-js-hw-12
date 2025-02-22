import axios from "axios";
const apiKey = "48847190-ee1f10217269e20f054d6fa7c";
const baseUrl = "https://pixabay.com/api/";

export async function getUser(imageQ, page) {  
    return await axios.get(baseUrl, {
        params: {
            key: `${apiKey}`,
            q: `${imageQ}`,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page:40,
            page: page,
            safesearch: 'true',
        }
    });
}
  