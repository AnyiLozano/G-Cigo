import { useSelector } from "react-redux";
import useSelectors from "../../../store/selectors";

const useNoticias = () => {
    const noticias = [
        {
            id: 1,
            noticias: '/images/noticia1.png',
            text1: '/images/text1.png'
        },
        {
            id: 1,
            noticias: '/images/noticia1.png',
            text1: '/images/text1.png'
        },
        {
            id: 1,
            noticias: '/images/noticia1.png',
            text1: '/images/text1.png'
        },

    ]

    const {useAuthSelectors} = useSelectors();
    const {auth} = useAuthSelectors();
    const authSelector = useSelector(auth);
    const {accessToken} = authSelector;

    return {
        noticias,
        accessToken
    }
}

export default useNoticias;