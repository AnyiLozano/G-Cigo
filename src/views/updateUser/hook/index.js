import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import useActions from "../../../store/actions";
import useSelectors from "../../../store/selectors";

const useUpdateUser = () => {
    // Actions
    const {dispatch, useUsersActions} = useActions();
    const {actEditUser, actGetUser, actUploadImage} = useUsersActions();


    // Selectors
    const {useAuthSelectors} = useSelectors();
    const {userSelector, auth} = useAuthSelectors();
    const user = useSelector(userSelector);
    const authSelector = useSelector(auth);
    const {accessToken} = authSelector;

    // Form
    const {register, handleSubmit} = useForm({
        defaultValues: {
            names: "",
            speciality: "",
            image: user.avatar
        }
    });

    const history = useHistory();

    const handleEditUser = data => {
        const {id} = user;
        const {names, speciality} = data;
        dispatch(actEditUser(id, names, speciality, (data) => {
            Swal.fire({
                icon: 'success',
                text: 'se actualizo la info exitosamente'
            }).then(res => {
                if(res.isConfirmed){
                    dispatch(actGetUser)
                    history.push('/perfil')
                }
            })
        }));
    }

    const handleClick = (input) => {
        input.current.click();
    }

    const handleFile = (e) => {
        dispatch(actUploadImage(user.id, e.[0], (data) => {
            Swal.fire({
                icon: 'success',
                text: 'Imagen Actualizada'
            }).then((res) => {
                if(res.isConfirmed){
                    dispatch(actGetUser);
                    history.push('perfil')
                }
            })
        }))
    }

    return {
        user,
        register,
        handleSubmit,
        handleEditUser,
        handleClick,
        handleFile,
        accessToken
    }
}

export default useUpdateUser;