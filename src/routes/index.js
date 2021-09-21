import React from "react";
import MainLayout from "../layout";
import {
    Route as DefaultRoute,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import useScreens from "../views";

const Route = ({
    component: Component,
    layout: Layout = Component.Layout || MainLayout,
    propsLayout = Component.props,
    ...rest
}) => {
    return (
        <DefaultRoute
            {...rest}
            render={(props) => (
                <Layout {...propsLayout}>
                    <Component {...props} />
                </Layout>
            )}
        />
    )
}

const Routes = () => {
    const {
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
    } = useScreens();

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/videos" component={Videos} />
                <Route exact path="/noticias" component={Noticias} />
                <Route exact path="/eventos" component={Eventos} />
                <Route exact path="/perfil" component={Perfil} />
                <Route exact path="/iniciar-sesion" component={IniciarSesion} />
                <Route exact path="/registro" component={Registro} />
                <Route path="/activate-users" component={ActivateUsers} />
                <Route path="/update-user" component={UpdateUser} />
                <Route path="/acerca" component={Acerca} />
            </Switch>
        </Router>
    )
}
export default Routes;