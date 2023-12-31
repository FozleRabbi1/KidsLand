import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthContextProvider';

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://kids-land-server-two.vercel.app/',
});

const useAxiosSecure = () => {
    const { logInOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logInOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logInOut, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;