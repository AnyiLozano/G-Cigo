import axios from "axios";
import { useSelector } from "react-redux";
import useSelectors from "../../selectors";

const useUsersProviders = () => {
    const {useAuthSelectors} = useSelectors();
    const {auth} = useAuthSelectors();
    const authSelector = useSelector(auth);
    const { accessToken } = authSelector;

    const proGetUser = () => {
        return axios.get('/users/getUser', {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
    }

    const proGetUsers = () => {
        return axios.get('/users/getUsers', {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
    }

    const proActiveUser = (id) => {
        return axios.post('/users/activateUser', {
            id
        },{
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
    }

    const proDeleteUser = (id) => {
        return axios.post('/users/deleteUser', {
            id
        },{
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
    }

    const proEditInfoUser = (id, names, speciality) => {
        return axios.post('/users/editUser', {
            id: id,
            names: names,
            speciality: speciality
        },{
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
    }

    const proEditImage = (id, image) => {
        let formData = new FormData();
        formData.append('image', image);
        formData.append('id', id);

        return axios.post('/users/imageUser', formData,{
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
    }

    const proGetVideos = () => {
        return axios.get('/getVideosDB1',{
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
    }

    return {
        proGetUser,
        proGetUsers,
        proActiveUser,
        proDeleteUser,
        proEditInfoUser,
        proEditImage,
        proGetVideos
    }
}

export default useUsersProviders;