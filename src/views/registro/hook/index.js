import {  useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useActions from "../../../store/actions";
import useSelectors from "../../../store/selectors";

const useRegistro = () => {
    //Actions
    const {dispatch, useAuthActions} = useActions();
    const {actRegisterUsers} = useAuthActions();

    // Selectors
    const {useAuthSelectors} = useSelectors();
    const {auth} = useAuthSelectors();
    const authSelector = useSelector(auth);
    const {accessToken} = authSelector;

    // Forms
    const {register, handleSubmit, reset} = useForm();

    // States
    const [windowPage, setWindowPage] = useState(document.body.clientWidth);
    const [open, setOpen] = useState(false)

    // Handlers
    const updateSize = () => {
        setWindowPage(document.body.clientWidth)
    }

    const registerUsers = data => {
        const {names, speciality, work_location, email, password, repassword} = data;
        if(password === repassword && password !== "" && repassword !== ""){
            dispatch(actRegisterUsers(
                names,
                email,
                password,
                speciality,
                work_location,

                () => {
                    setOpen(true)
                    reset({
                        names: "",
                        email: "",
                        speciality: "",
                        password: "",
                        repassword: "",
                        work_location: ""
                    })
                }

            ))
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    // Listeners
    window.addEventListener('resize', updateSize);
    
    

    return {
        windowPage,
        handleSubmit,
        register,
        registerUsers,
        open,
        handleClose,
        accessToken
    }
}

export default useRegistro;