import React from "react";
import MainLayout from "../layout";
import {
    Route as DefaultRoute,
    BrowserRouter,
    Switch,
} from 'react-router-dom';
import useScreens from "../views";
import { createBrowserHistory } from "history";

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

const history = createBrowserHistory();

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
        <BrowserRouter forceRefresh={true}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact  path="/videos" component={Videos} />
                <Route exact  path="/noticias" component={Noticias} />
                <Route exact path="/eventos" component={Eventos} />
                <Route exact path="/perfil" component={Perfil} />
                <Route exact path="/iniciar-sesion" component={IniciarSesion} />
                <Route exact path="/registro" component={Registro} />
                <Route exact path="/activate-users" component={ActivateUsers} />
                <Route exact path="/update-user" component={UpdateUser} />
                <Route exact path="/acerca" component={Acerca} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;