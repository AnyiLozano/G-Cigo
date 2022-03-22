import useCreateSelector from "../useCreateSelector";

const useAuthSelectors = () => {
    const createSelector = useCreateSelector();

    const auth = createSelector(
        (state) => state.auth,
        (auth) => {
            return auth;
        }
    )

    const userSelector = createSelector(
        (state) => state.user,
        (user) => {
            return user.user;
        }
    )

    const usersSelector = createSelector(
        (state) => state.users,
        (users) => {
            return users.users;
        }
    )

    const videosSelector = createSelector(
        (state) => state.videos,
        (videos) => {
            return videos.videos;
        }
    )

    return {
        auth,
        userSelector,
        usersSelector,
        videosSelector
    }
}

export default useAuthSelectors;