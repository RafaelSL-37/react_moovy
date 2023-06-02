import { UserDTO } from "../models/user.dto";
import api from "../navigation/api";

const getUserById = async (id:string) => {
    try {
        const token = localStorage.getItem('authToken');

        const response = await api.get(`/users/${id}`, {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
        });

        return response.data;
    } catch (error) {
        console.error("ops! ocorreu um erro" + error);
    }
}

const createUser = async (user: UserDTO) => {
    try {
        const token = localStorage.getItem('authToken');

        const response = await api.post("/users", user, {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
        });

        return response.data;
    } catch (error) {
        console.error("ops! ocorreu um erro" + error);
    }
}

export const UserService = { getUserById, createUser };