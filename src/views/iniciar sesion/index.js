import { Button, Fade, Grid, Modal } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import useLogin from "./hook";
import useStyle from "./login.style";
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '@media (max-width: 1024px)':{
        width: '75%'
    }
};

const IniciarSesion = () => {
    const classes = useStyle();

    const {
        windowPage,
        handleSubmit,
        loginUser,
        register,
        accessToken,
        handleClose,
        open,
        contraseña,
        changePassword
    } = useLogin();

    const history = useHistory();

    if (accessToken !== undefined) {
        history.push('/');
    }

    return (
        <React.Fragment>
            <Grid container className={classes.image1}>
                <Grid item lg={8} md={12} xs={12} sm={12} className={classes.image3}>
                    <img src="/images/show.png" alt="show" className={classes.image2} />
                </Grid>

                <Grid item lg={4} md={12} xs={12} sm={12} className={classes.alignCenter}>
                    {
                        windowPage <= 1024 ? (
                            <Grid item lg={12} xs={12} sm={12}>
                                <Grid item lg={12} xs={12}>
                                    <Grid container spacing={0.5} alignItems="center" justifyContent="center">
                                        <Grid item xs={2} md={1} sm={1}>
                                            <img src="/images/usuario.png" alt="usuario" width='40' />
                                        </Grid>
                                        <Grid item lg={10} xs={8} md={10} sm={10}>
                                            <input className={classes.usu} placeholder="Usuario" {...register('email')} type="email" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={12} sm={12} >
                                    <Grid container spacing={0.5} alignItems="center" justifyContent="center">
                                        <Grid item xs={2} md={1} sm={1}>
                                            <img src="/images/candado.png" alt="candado" width='40' />
                                        </Grid>
                                        <Grid item lg={10} xs={8} md={10} sm={10}>
                                            <input className={classes.usu} placeholder="Contraseña" {...register('password')} type="password" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* seccion iniciar sesión */}
                                <Grid item lg={12} xl={12} md={12} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <a href="/" style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}>
                                        <span className={classes.usu3} onClick={contraseña}>¿Has olvidado tu contraseña?</span>
                                    </a>
                                    <Button className={classes.usu1} onClick={handleSubmit(loginUser)}>INICIAR SESIÓN</Button>
                                    <Button className={classes.usu1} onClick={() => history.push('/registro')}>CREAR CUENTA</Button>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid item lg={12} xs={12} sm={12} md={12}>
                                <Grid item lg={12} xs={12} md={12}>
                                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                                        <Grid item>
                                            <img src="/images/usuario.png" alt="usuario" width='40' />
                                        </Grid>
                                        <Grid item lg={10} xs={8} md={7}>
                                            <input className={classes.usu} placeholder="Usuario" {...register('email')} type="email" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={12} sm={12} md={12}>
                                    <Grid container spacing={1} justifyContent="center">
                                        <Grid item>
                                            <img src="/images/candado.png" alt="candado" width='40' style={{ marginTop: '0.6vw' }} />
                                        </Grid>
                                        <Grid item lg={10} xs={8} md={7}>
                                            <Grid item xl={12}>
                                                <input className={classes.usu} placeholder="Contraseña" {...register('password')} type="password" />
                                            </Grid>
                                            <Grid item xl={12} className={classes.center}>

                                                <span className={classes.usu3} onClick={(e) => contraseña(e)}>¿Has olvidado tu contraseña?</span>

                                            </Grid>
                                            <Grid item xl={12} className={classes.center}>
                                                <Button className={classes.usu1} onClick={handleSubmit(loginUser)}>INICIAR SESIÓN</Button>
                                            </Grid>
                                            <Grid item xl={12} className={classes.center}>
                                                <Button className={classes.usu1} onClick={() => history.push('/registro')}>CREAR CUENTA</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    }


                    {/* modal Olvide contraseña */}
                    <Modal
                        aria-labelledby="spring-modal-title"
                        aria-describedby="spring-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                    >
                        <Fade in={open}>
                            <Box sx={style}>
                                <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <input className={classes.usu} placeholder="Email" {...register('emailRecover')} type="email" />
                                </Grid>
                                <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <input className={classes.usu} placeholder="Contraseña" {...register('passwordRecover')} type="password" />
                                </Grid>
                                <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <input className={classes.usu} placeholder="Confirmar Contraseña" {...register('repasswordRecover')} type="password" />
                                </Grid>
                                <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button className={classes.olvi1} onClick={handleSubmit(changePassword)}>Cambiar Contraseña</Button>
                                </Grid>
                            </Box>
                        </Fade>
                    </Modal>
                </Grid>
            </Grid>
        </React.Fragment >
    )
}

export default IniciarSesion;