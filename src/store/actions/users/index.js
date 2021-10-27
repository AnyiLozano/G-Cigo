import useServices from "../../services";
import { GET_USER, GET_USERS, GET_VIDEOS } from "../../types";

const useUsersActions = () => {
    const {useUsersServices} = useServices();
    const {serGetUser, serGetUsers, serActivateUser, serDeleteUser, serEditUser, serUploadImage, serGetVideos} = useUsersServices();

    const actGetUser = async dispatch => {
        try {
            const {data} = await serGetUser();
            
            dispatch({
                type: GET_USER,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    const actGetUsers = async dispatch => {
        try {
            const {data} = await serGetUsers();
            
            dispatch({
                type: GET_USERS,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    const actActivateUser = (id, onSuccess) => async dispatch => {
        try {
            const {data} = await serActivateUser(id);
            
            
            onSuccess && onSuccess(data)
        } catch (error) {
            console.log(error);
        }
    }

    const actDeleteUser = (id, onSuccess) => async dispatch => {
        try {
            const {data} = await serDeleteUser(id);
            
            
            onSuccess && onSuccess(data)
        } catch (error) {
            console.log(error);
        }
    }

    const actEditUser = (id, names, speciality, onSuccess) => async dispatch => {
        try {
            const {data} = await serEditUser(id, names, speciality);
            
            if(data.transaction.status === true){
                onSuccess && onSuccess(data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const actUploadImage = (id, image, onSuccess) => async dispatch => {
        try {
            const {data} = await serUploadImage(id,image);
            
            if(data.transaction.status === true){
                onSuccess && onSuccess(data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const actGetVideos =  async dispatch => {
        try {
            const {data} = await serGetVideos();
            
            dispatch({
                type: GET_VIDEOS, 
                payload: data.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    return {
        actGetUser,
        actGetUsers,
        actActivateUser,
        actDeleteUser,
        actEditUser,
        actUploadImage,
        actGetVideos
    }
}

export default useUsersActions;