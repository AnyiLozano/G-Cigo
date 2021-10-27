import axios from "axios";
import PropTypes from 'prop-types';



const useAuthProviders = () => {
    const registerUser = (
        names,
        email,
        password,
        speciality,
        work_location
    ) => {
        let formData = new FormData();
        formData.append('names', names);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('speciality', speciality);
        formData.append('work_location', work_location);

        return axios.post('/users/newUser', formData);
    }

    registerUser.propTypes = {
        names: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        speciality: PropTypes.string.isRequired,
        work_location: PropTypes.string.isRequired,
    }

    const proLogin = (email, password) => {
        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        return axios.post('/users/login', formData);
    }

    proLogin.propTypes = {
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }

    return {
        registerUser,
        proLogin
    }
}

export default useAuthProviders;