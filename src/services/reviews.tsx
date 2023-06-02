import { ReviewDTO } from '../models/review.dto';
import api from "../navigation/api";

const getReviewsByUserId = async (id:string) => {
    try {
        const token = localStorage.getItem('authToken');

        const response = await api.get(`/reviews/${id}`, {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
        });

        return response.data;
    } catch (error) {
        console.error("ops! ocorreu um erro" + error);
    }
}

const createReview = async (review: ReviewDTO) => {
    try {
        const token = localStorage.getItem('authToken');

        const response = await api.post("/reviews", review, {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
        });

        return response;
    } catch (error) {
        console.error("ops! ocorreu um erro" + error);
    }
}

export const ReviewService = { getReviewsByUserId, createReview };