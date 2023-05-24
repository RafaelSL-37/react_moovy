import { AuthDTO } from "../models/auth.dto";
import api from "../navigation/api";

const authUser = async (auth: AuthDTO): Promise<string | undefined> => {
    try {
        const response = await api.post("/auth", auth);

        return response.data;
    } catch (error) {
        console.error("Erro na autenticação: " + error);
    }
}

export const AuthService = authUser;