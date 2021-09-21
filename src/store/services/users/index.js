import { trackPromise } from "react-promise-tracker";
import useProviders from "../../providers";

const useUsersServices = () => {
    const {useUsersProviders} = useProviders();
    const {proGetUser, proGetUsers, proActiveUser, proDeleteUser, proEditInfoUser, proEditImage, proGetVideos} = useUsersProviders();

    const serGetUser = () => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(proGetUser()));
            } catch (error) {
                reject(error);
            }
        });
    }

    const serGetUsers = () => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(proGetUsers()));
            } catch (error) {
                reject(error);
            }
        });
    }

    const serActivateUser = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(proActiveUser(id)));
            } catch (error) {
                reject(error);
            }
        });
    }

    const serDeleteUser = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(proDeleteUser(id)));
            } catch (error) {
                reject(error);
            }
        });
    }

    const serEditUser = (id, names, speciality) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(proEditInfoUser(id, names, speciality)));
            } catch (error) {
                reject(error);
            }
        });
    }

    const serUploadImage = (id, image) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(proEditImage(id, image)));
            } catch (error) {
                reject(error);
            }
        });
    }

    const serGetVideos = () => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(proGetVideos()));
            } catch (error) {
                reject(error);
            }
        });
    }

    return {
        serGetUser,
        serGetUsers,
        serActivateUser,
        serDeleteUser,
        serEditUser,
        serUploadImage,
        serGetVideos
    }
}

export default useUsersServices;