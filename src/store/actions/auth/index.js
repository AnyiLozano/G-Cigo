import useServices from "../../services";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { LOGIN } from "../../types";

const useAuthActions = () => {
    const {useAuthServices} = useServices();
    const {serRegisterUser, serLogin} = useAuthServices();

    const actRegisterUsers = (
        names,
        email,
        password,
        speciality,
        work_location,
        onSuccess
    ) => async dispatch => {
        try {
            const res = await serRegisterUser(
                names,
                email,
                password,
                speciality,
                work_location
            );

            onSuccess && onSuccess(res);
        } catch (error) {
            console.log(error)
        }
    }

    const actLoginUser = (email, password, onSuccess) => async dispatch => {
        try {
            const res = await serLogin(email, password);
            let data = null;
            if(res.data.transaction.status === true){
                data = res.data.data;
            }else{
                Swal.fire({
                    icon: 'error',
                    text: res.data.data
                })
            }

            console.log(data)

            dispatch({
                type: LOGIN,
                payload: data
            })

            onSuccess && onSuccess();
        } catch (error) {
            console.log(error);
        }
    }

    actLoginUser.propTypes = {
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }

    const actLogout = (onSuccess) => async dispatch => {
        try {
            dispatch({
                type: LOGIN,
                payload: {
                    accessToken: undefined,
                    roles: []
                }
            })

            onSuccess && onSuccess()
        } catch (error) {
            console.log(error)
        }
    }

    return {
        actRegisterUsers,
        actLoginUser,
        actLogout
    }
}

export default useAuthActions;