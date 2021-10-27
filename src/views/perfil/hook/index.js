import { useEffect } from "react";
import { useSelector } from "react-redux";
import useActions from "../../../store/actions";
import useSelectors from "../../../store/selectors";

const usePerfil = () => {
    // Actions
    const {dispatch, useUsersActions} = useActions();
    const {actGetUser} = useUsersActions();

    // Selectors
    const {useAuthSelectors} = useSelectors();
    const {userSelector, auth} = useAuthSelectors();
    const user = useSelector(userSelector);
    const authSelector = useSelector(auth);
    const {accessToken} = authSelector;

    // Effect
    useEffect(() => {
        dispatch(actGetUser);
    }, [dispatch, actGetUser]);

    console.log(user)

    return {
        user,
        accessToken
    }
}

export default usePerfil;