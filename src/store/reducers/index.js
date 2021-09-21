import { combineReducers } from "@reduxjs/toolkit";
import useAuthReducers from "./auth";

const useCombineReducers = () => {

    const {auth, user, users, videos} = useAuthReducers();

    return combineReducers(
        Object.assign({
            auth,
            user,
            users,
            videos
        })
    )
}

export default useCombineReducers;