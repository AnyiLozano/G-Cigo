import { trackPromise } from "react-promise-tracker";
import useProviders from "../../providers";

const useAuthServices = () => {
    const { useAuthProviders } = useProviders();
    const { registerUser, proLogin } = useAuthProviders();

    const serRegisterUser = (
        names,
        email,
        password,
        speciality,
        work_location
    ) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(registerUser(
                    names,
                    email,
                    password,
                    speciality,
                    work_location
                )))
            } catch (error) {
                reject(error)
            }
        })
    }

    const serLogin = (email, password) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(proLogin(email,password)))
            } catch (error) {
                reject(error)
            }
        })
    }

    return {
        serRegisterUser,
        serLogin
    }
}

export default useAuthServices;