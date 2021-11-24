import { useSelector } from "react-redux";
import useSelectors from "../../../store/selectors";
import useActions from "../../../store/actions";
import { useEffect, useState } from "react";


const useVideos = () => {
    // Actions
    const {dispatch, useUsersActions} = useActions();
    const {actGetVideos} = useUsersActions()

    // Selectors
    const {useAuthSelectors} = useSelectors();
    const {auth, videosSelector} = useAuthSelectors();
    const authSelector = useSelector(auth);
    const {accessToken} = authSelector;
    const videos = useSelector(videosSelector);

    // States
    const [page, setPage] = useState(1);
    const [totalPag, setTotalPag] = useState(1);
    const [videosFinal, setVideosFinal] = useState([]);

    // Handlers
    const perPage = (pageNumber) => {
        const pageProp = pageNumber !== undefined ? pageNumber : page;
        if(pageNumber !== undefined) {
            setPage(parseInt(pageNumber));
        }

        setTotalPag(Math.ceil(videos.length / 6));
        const Videos = videos.slice((pageProp - 1) * 6, pageProp * 6)

        setVideosFinal(Videos);
    }

    const handleChange = (e) => {
        perPage(e.target.innerText);
    }

    // Effects
    useEffect(() => {
        dispatch(actGetVideos);
        perPage();
    }, [])

    return {
        videosFinal,
        accessToken,
        handleChange,
        totalPag,
        page
    }
}

export default useVideos;