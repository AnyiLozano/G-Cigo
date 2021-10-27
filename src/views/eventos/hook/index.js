import { useSelector } from "react-redux";
import useSelectors from "../../../store/selectors";

const useEventos = () => {
    const eventos = [
        {
            id: 1,
            event: '/images/log.png',
            text3: '/images/acerca.png'
        },
        {
            id: 1,
            event: '/images/log.png',
            text3: '/images/enlazatte.png'
        },
    ]

    const {useAuthSelectors} = useSelectors();
    const {auth} = useAuthSelectors();
    const authSelector = useSelector(auth);
    const {accessToken} = authSelector;

    return {
        eventos,
        accessToken
    }
}

export default useEventos;