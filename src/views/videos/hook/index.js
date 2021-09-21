import { useSelector } from "react-redux";
import useSelectors from "../../../store/selectors";
import useActions from "../../../store/actions";
import { useEffect } from "react";


const useVideos = () => {

    const {dispatch, useUsersActions} = useActions();
    const {actGetVideos} = useUsersActions()

    const {useAuthSelectors} = useSelectors();
    const {auth, videosSelector} = useAuthSelectors();
    const authSelector = useSelector(auth);
    const {accessToken} = authSelector;
    const videos = useSelector(videosSelector);

    useEffect(() => {
        dispatch(actGetVideos)
    }, [dispatch, actGetVideos])

    console.log(videos)

    return {
        videos,
        accessToken
    }
}

export default useVideos;