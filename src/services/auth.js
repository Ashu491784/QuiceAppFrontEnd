import API from "./api";

const register = async (userData) => {
    try {
        const response = await API.post('user/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

const login = async (credentials) => {
    try {
        const response = await API.post('user/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

const getProfile = async () => {
    try {
        const response = await API.get('user/Profile');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


const authService = {
    register,
    login,
    getProfile,
};

export default authService;
