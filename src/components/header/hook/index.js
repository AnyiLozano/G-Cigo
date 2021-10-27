import {useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import useActions from "../../../store/actions";
import useSelectors from "../../../store/selectors";

const useHeader = () => {
    // actions
    const { dispatch, useAuthActions} = useActions();
    const { actLogout } = useAuthActions();

    // Selectors
    const { useAuthSelectors } = useSelectors();
    const { auth } = useAuthSelectors();
    const authSelector = useSelector(auth);
    const { accessToken, roles } = authSelector;

    const history = useHistory()

    

    const links = [
        {
            name: 'Inicio',
            path: '/'
        },
        {
            name: 'Videos',
            path: '/videos'
        },
        {
            name: 'Noticias',
            path: '/noticias'
        },
        {
            name: 'Eventos',
            path: '/eventos'
        },
        (accessToken !== undefined && roles[0] === "Admin" ? {
            name: 'Activación usuarios',
            path: '/activate-users'
        }: undefined),
        {
            name: 'Perfil',
            path: '/perfil'
        },
        
    ];

    const [anchor, setAnchor] = useState(false);

    const closeDrawer = (close) => {
        setAnchor(close)
    }


    const openDrawer = (open) => {
        setAnchor(open)
    }

    const handlerCloseSesion = () => {
        dispatch(actLogout(() => {
            history.push('/iniciar-sesion')
        }));
        
    }

    return {
        links,
        anchor,
        closeDrawer,
        openDrawer,
        handlerCloseSesion,
        accessToken
    }
}
export default useHeader;