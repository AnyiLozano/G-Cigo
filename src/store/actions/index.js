import { useDispatch } from "react-redux";
import useAuthActions from "./auth";
import useUsersActions from "./users";

const useActions = () => {
    const dispatch = useDispatch();
    
    return {
        dispatch,
        useAuthActions,
        useUsersActions
    }
}

export default useActions;