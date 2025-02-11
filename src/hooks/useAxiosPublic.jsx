import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://mw-assignments11-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;