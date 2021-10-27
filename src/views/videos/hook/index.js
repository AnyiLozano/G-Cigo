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
    const perPage = () => {
        let totalItems = videos.length,
            currentPage = page,
            pageSize = 6,
            startPage = null,
            endPage = null,
            totalPages = Math.ceil(videos.length / pageSize);

            setTotalPag(totalPages);

            if(currentPage <= 5){
                startPage = 1;
                endPage = totalPages;
            } else {
                if (currentPage <= 3) {
                    startPage = 1;
                    endPage = 5;
                } else if (currentPage + 2 >= totalPages) {
                    startPage = totalPages - 4;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 2;
                    endPage = currentPage + 2;
                }
            }

            let startIndex = (currentPage - 1) * pageSize;
            let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    
            let pageOfItems = videos.slice(startIndex, endIndex + 1);
    
            setVideosFinal(pageOfItems);
    }

    const handleChange = (e, value) => {
        setPage(value);
        perPage();
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