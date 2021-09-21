import { GET_USER, GET_USERS, GET_VIDEOS, LOGIN } from "../../types";
import createReducer from "../createReducer";

const useAuthReducers = () => {
    const auth = createReducer(
        {
            accessToken: undefined,
            roles: []
        },
        {
            [LOGIN](state, action){
                return {
                    ...state,
                    accessToken: action.payload.token,
                    roles: action.payload.roles
                }
            }
        }
    )
    
    const user = createReducer(
        {
            user: {}
        },
        {
            [GET_USER](state, action){
                return {
                    ...state,
                    user: action.payload
                }
            }
        }
    )

    const videos = createReducer(
        {
            videos: []
        },
        {
            [GET_VIDEOS](state, action){
                return {
                    ...state,
                    videos: action.payload
                }
            }
        }
    )

    const users = createReducer(
        {
            users: {}
        },
        {
            [GET_USERS](state, action){
                return {
                    ...state,
                    users: action.payload
                }
            }
        }
    )

    return {
        auth,
        user,
        users,
        videos
    }
}

export default useAuthReducers;