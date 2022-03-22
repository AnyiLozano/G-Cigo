import { useSelector } from "react-redux";
import useSelectors from "../../../store/selectors";

const useHome = () => {
    const carousel = [
        {
            id: 1,
            image: "/images/carousel-1.png"
        },
        {
            id: 2,
            image: "/images/carousel-1.png"
        },
        {
            id: 3,
            image: "/images/carousel-1.png"
        },
        {
            id: 4,
            image: "/images/carousel-1.png"
        }
    ];

    const {useAuthSelectors} = useSelectors();
    const {auth} = useAuthSelectors();
    const authSelector = useSelector(auth);
    const {accessToken} = authSelector;

    return {
        carousel,
        accessToken
    }
}

export default useHome;