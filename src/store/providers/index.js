import axios from "axios";
import useAuthProviders from "./auth";
import useUsersProviders from "./users";

axios.defaults.baseURL = 'http://www.api.grupocigo.com/api'

const useProviders = () => {
    return {
        useAuthProviders,
        useUsersProviders
    }
}

export default useProviders; 