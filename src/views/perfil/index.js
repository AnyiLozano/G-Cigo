import React from "react";
import { Button, Grid } from "@material-ui/core";
import useStyle from "./profile.style";
import "../../styles/svg.scss"
import usePerfil from "./hook";
import { useHistory } from "react-router";

const Perfil = () => {
    const classes = useStyle();

    const history = useHistory();
    const {
        user,
        accessToken
    } = usePerfil();

    if(accessToken === undefined){
        history.push('/iniciar-sesion')
    }

    return (
        <React.Fragment>
            <Grid container className={classes.background}>
                <Grid item xs={12} lg={6}></Grid>
                <Grid item xs={12} lg={6} className={classes.containerSvg}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 687.14 828"
                        className={classes.svg}
                    >
                        <defs>
                            <linearGradient
                                id="Degradado_sin_nombre_4"
                                x1="319.66"
                                y1="505.95"
                                x2="386.58"
                                y2="861.9"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0" stopColor="#f3c7fc" />
                                <stop offset="0.21" stopColor="#d5a7df" />
                                <stop offset="0.75" stopColor="#8e5b99" />
                                <stop offset="1" stopColor="#723d7d" />
                            </linearGradient>
                        </defs>
                        <g id="Capa_2" data-name="Capa 2">
                            <g id="Iconos">
                                {
                                    user.avatar === null && (
                                        <ellipse className="cls-1" cx="329.7" cy="353.79" rx="287.1" ry="353.79" />
                                    )
                                }
                                <g className="cls-2">
                                    {
                                        user.avatar !== null ? (
                                            <React.Fragment>
                                                <image href={`http://www.api.grupocigo.com/${user.avatar}`} width="600" height="600" preserveAspectRatio="xMidYMid slice" cx="329.7" cy="353.79" rx="287.1" ry="353.79" />
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <path className="cls-3" d="M326.47,350.35c33.88,0,63.22-12.16,87.19-36.13s36.13-53.31,36.13-87.19-12.15-63.21-36.13-87.19-53.31-36.13-87.19-36.13-63.22,12.16-87.19,36.13S203.15,193.15,203.15,227s12.15,63.22,36.13,87.19S292.59,350.35,326.47,350.35Zm-66-189.3c18.39-18.39,40-27.33,66-27.33s47.58,8.94,66,27.33,27.34,40,27.34,66-8.94,47.57-27.34,66-40,27.34-66,27.34-47.57-8.94-66-27.34-27.35-40-27.35-66S242.1,179.45,260.5,161.05Z" />
                                                <path className="cls-3" d="M542.25,497.42a306.28,306.28,0,0,0-4.15-32.35,255.53,255.53,0,0,0-8-32.53,160.48,160.48,0,0,0-13.38-30.34,114,114,0,0,0-20.16-26.27,88.57,88.57,0,0,0-29-18.2,100,100,0,0,0-37-6.7c-5.22,0-10.28,2.15-20,8.5-6,3.92-13,8.45-20.88,13.47-6.71,4.27-15.79,8.27-27,11.9a104.91,104.91,0,0,1-66.09,0c-11.21-3.62-20.3-7.63-27-11.9-7.77-5-14.8-9.5-20.89-13.47-9.76-6.35-14.81-8.5-20-8.5a99.87,99.87,0,0,0-37,6.7,88.83,88.83,0,0,0-29,18.2,114.5,114.5,0,0,0-20.16,26.27,160.79,160.79,0,0,0-13.37,30.34,256,256,0,0,0-8,32.53,302.55,302.55,0,0,0-4.15,32.36c-.68,9.78-1,60.95-1,71.23,0,26.73,8.49,48.37,25.25,64.32,16.54,15.75,38.43,23.73,65.06,23.73H453c26.63,0,48.52-8,65.07-23.73,16.75-15.94,25.25-37.59,25.25-64.32C543.28,558.34,542.93,507.17,542.25,497.42ZM497.34,611.25c-10.93,10.4-25.45,15.46-44.38,15.46H206.43c-18.93,0-33.45-5.06-44.38-15.46-10.72-10.21-15.93-24.14-15.93-42.59,0-9.59.32-60.06.95-69.16a273.69,273.69,0,0,1,3.75-29.13,225.13,225.13,0,0,1,7-28.68A131,131,0,0,1,168.7,417a85,85,0,0,1,14.81-19.42,59.25,59.25,0,0,1,19.27-12,69.22,69.22,0,0,1,23.63-4.55c1.05.55,2.93,1.62,6,3.6,6.16,4,13.27,8.6,21.13,13.62,8.86,5.65,20.28,10.75,33.91,15.15a134.9,134.9,0,0,0,84.55,0c13.64-4.41,25.05-9.51,33.93-15.17,8-5.14,14.95-9.59,21.12-13.61,3-2,4.9-3.05,5.95-3.6a69.23,69.23,0,0,1,23.64,4.55,59.2,59.2,0,0,1,19.26,12A84.63,84.63,0,0,1,490.68,417a130.92,130.92,0,0,1,10.89,24.66,226.22,226.22,0,0,1,7,28.67,278,278,0,0,1,3.75,29.15h0c.63,9.05.95,59.52,1,69.14C513.27,587.11,508.06,601,497.34,611.25Z" />
                                            </React.Fragment>
                                        )
                                    }
                                </g>
                            </g>
                            <g id="Cuadros">
                                <path className="cls-4" d="M687.14,565.85c-44.35-22.54-111.49-20.56-165.07-.59C406.35,608.4,158.41,523,56.84,581.42,18.21,603.61,5.34,637.12.51,682.2-4,723.91,21.4,767.55,62.86,785.81c36.67,16.16,82.46,24.39,123.53,9.08C295,754.4,568.25,876.45,687.14,805.14Z" />
                                <text className="cls-5" transform="translate(83.38 651.08)">DR(A). {user.fullname}</text>
                                <text className="cls-6" transform="translate(85.05 701.73)">{user.speciality}</text>
                            </g>
                        </g>
                    </svg>
                </Grid>
            </Grid>
            <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center', padding: '50px 0' }}>
                <Button className={classes.button} onClick={() => history.push('/update-user')}>actualizar información</Button>
            </Grid>
            <div className={classes.div}></div>
        </React.Fragment >
    )
}

export default Perfil;