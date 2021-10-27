import { useSelector } from "react-redux";
import useSelectors from "../../../store/selectors";

const useAcerca = () => {
    const acerca = [
        {
            id: 1,
            event: '/images/mujer.png',
        },
    ]

    const videos = [
        {
            id: 1,
            event1: '/images/image1.png',
        },
        {
            id: 2,
            event1: '/images/image2.png',
        },
        {
            id: 3,
            event1: '/images/video.png',
        },
        {
            id: 4,
            event1: '/images/image3.png',
        },
        {
            id: 5,
            event1: '/images/image4.png',
        },
        {
            id: 6,
            event1: '/images/image5.png',
        },
    ]

    const {useAuthSelectors} = useSelectors();
    const {auth} = useAuthSelectors();
    const authSelector = useSelector(auth);
    const {accessToken} = authSelector;

    return {
        acerca,
        videos,
        accessToken
    }
}

export default useAcerca;