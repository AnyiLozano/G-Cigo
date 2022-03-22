import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import useActions from "../../../store/actions";
import useSelectors from "../../../store/selectors";

const useLogin = () => {
    // Actions
    const { dispatch, useAuthActions } = useActions();
    const { actLoginUser } = useAuthActions();

    // States
    const [windowPage, setWindowPage] = useState(document.body.clientWidth);

    // History
    const history = useHistory();

    // Selectors
    const {useAuthSelectors} = useSelectors();
    const {auth} = useAuthSelectors();
    const authSelector = useSelector(auth);
    const {accessToken} = authSelector;

    // Handlers
    const updateSize = () => {
        setWindowPage(document.body.clientWidth)
    }

    const loginUser = data => {
        const {email, password} = data;
        dispatch(actLoginUser(email, password, () => {
            history.push('/');
        }));
    }

    const [open, setOpen] = useState(false)

    const contraseña = (e) => {
        e.preventDefault();
        setOpen(true)
    }

    const changePassword = data => {
        if(data.passwordRecover === data.repasswordRecover) {
            axios.post('http://www.api.grupocigo.com/api/users/recoverPassword', {
                email: data.emailRecover , password: data.passwordRecover
            })
            .then((res) => {
                if(res.data.transaction.status === true){
                    setOpen(false)
                    Swal.fire({
                        icon: 'success',
                        text: res.data.data
                    })
                }else {
                    Swal.fire({
                        icon: 'error',
                        text: 'Ocurrio un problema de cambiar las contraseñas',
                    })
                }
            })
        }else {
            Swal.fire({
                icon: 'error',
                text: 'las contraseñas no coinciden',
            })
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    // Listeners
    window.addEventListener('resize', updateSize);
    
    // Forms
    const {register, handleSubmit} = useForm();

    return {
        windowPage,
        register,
        handleSubmit,
        loginUser,
        accessToken,
        contraseña,
        open,
        changePassword,
        handleClose
    }
}

export default useLogin;