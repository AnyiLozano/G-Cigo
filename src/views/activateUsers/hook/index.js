import { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import useActions from "../../../store/actions";
import useSelectors from "../../../store/selectors";

const useActivateUsers = () => {
    // Actions
    const { dispatch, useUsersActions } = useActions();
    const { actGetUsers, actActivateUser, actDeleteUser } = useUsersActions();

    // Selectors
    const { useAuthSelectors } = useSelectors();
    const { usersSelector, auth } = useAuthSelectors();
    const users = useSelector(usersSelector);
    const authSelector = useSelector(auth);
    const { accessToken, roles } = authSelector;
    

    useEffect(() => {
        dispatch(actGetUsers);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handlers
    const handlerDelete = (id) => {
        Swal.fire({
            icon: 'question',
            text: 'Seguro que quieres eliminar el usuario?'
        }).then((res) => {
            if (res.isConfirmed) {
                dispatch(actDeleteUser(id, (data) => {
                    if (data.transaction.status === true) {
                        Swal.fire({
                            icon: 'success',
                            html: data.data
                        }).then(res => {
                            if (res.isConfirmed) {
                                dispatch(actGetUsers);
                            }
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: 'Ocurrio un problema al momento de eliminar al usuario'
                        })
                    }
                }))
            }
        })
    }

    const handlerSuccess = (id) => {
        Swal.fire({
            icon: 'question',
            text: 'Seguro que quieres autorizar el acceso a este usuario?'
        }).then((res) => {
            if (res.isConfirmed) {
                dispatch(actActivateUser(id, (data) => {
                    if (data.transaction.status === true) {
                        Swal.fire({
                            icon: 'success',
                            html: data.data
                        }).then(res => {
                            if (res.isConfirmed) {
                                dispatch(actGetUsers);
                            }
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: 'Ocurrio un problema al momento de autorizar al usuario'
                        })
                    }
                }))
            }
        })
    }

    return {
        users,
        handlerSuccess,
        handlerDelete,
        accessToken,
        roles
    }
}

export default useActivateUsers;