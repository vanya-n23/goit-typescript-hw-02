import axios from 'axios';

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ApiResponse {
  results: Image[];
  total: number;
}

const API_KEY = '2w6R6USrMNGP0vmf6KIMROA0sIy4p5X_FBv1MM1j_IY'; 
const BASE_URL = 'https://api.unsplash.com/';

export const fetchImages = async (query: string, page: number): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}search/photos`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params: {
        query,
        page,
        per_page: 15,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images from Unsplash. Please try again.');
  }
};