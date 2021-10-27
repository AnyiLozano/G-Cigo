import Home from "./home";
import Videos from "./videos";
import  Noticias from './noticias';
import  Eventos from './eventos';
import Perfil from './perfil';
import IniciarSesion from './iniciar sesion';
import Registro  from "./registro";
import ActivateUsers from "./activateUsers";
import UpdateUser from "./updateUser";
import Acerca from "./acerca";

const useScreens = () => {
    return {
        Home,
        Videos,
        Noticias,
        Eventos,
        Perfil,
        IniciarSesion,
        Registro,
        ActivateUsers,
        UpdateUser,
        Acerca
    }
}

export default useScreens;