import useAuthServices from "./auth";
import useUsersServices from "./users";

const useServices = () => {
    return {
        useAuthServices,
        useUsersServices
    }
}

export default useServices;