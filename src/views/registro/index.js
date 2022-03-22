import { Button, Fade, Grid, Modal } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useRegistro from './hook';
import useStyle from './registro.style';

const Registro = () => {
    const classes = useStyle();
    const history = useHistory();

    const { windowPage, handleSubmit, register, registerUsers, open, handleClose, accessToken } = useRegistro();

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

                                <Grid item lg={12} xl={12} md={12} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
                                    <input className={classes.usu} {...register('names')} placeholder="Nombre" />
                                </Grid>
                                <Grid item lg={12} xl={12} md={12} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
                                    <input className={classes.usu} {...register('speciality')} placeholder="Especialidad" />
                                </Grid>
                                <Grid item lg={12} xl={12} md={12} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
                                    <input className={classes.usu} {...register('work_location')} placeholder="¿Donde trabaja?" />
                                </Grid>
                                <Grid item lg={12} xl={12} md={12} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
                                    <input className={classes.usu} {...register('email')} placeholder="Correo electronico" />
                                </Grid>
                                <Grid item lg={12} xl={12} md={12} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
                                    <input className={classes.usu} {...register('password')} placeholder="Contraseña" type="password" />
                                </Grid>
                                <Grid item lg={12} xl={12} md={12} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
                                    <input className={classes.usu} {...register('repassword')} placeholder="Confirmar Contraseña" type="password" />
                                </Grid>
                                {/* seccion iniciar sesión */}
                                <Grid item lg={12} xl={12} md={12} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <Button className={classes.usu1} onClick={handleSubmit(registerUsers)}>REGISTRARME</Button>
                                        <Button className={classes.usu1} onClick={() => history.push('/iniciar-sesion')}>INICIAR SESIÓN</Button>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid item lg={12} xs={12} sm={12} md={12} style={{ margin: '40px 0' }}>
                                <Grid item lg={12} xs={12} md={12}>
                                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                                        <Grid item lg={10} xs={8} md={7}>
                                            <label className={classes.especial}>Nombre</label>
                                            <input className={classes.usu} {...register('names')} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={12} sm={12} md={12}>
                                    <Grid container spacing={1} justifyContent="center">
                                        <Grid item lg={10} xs={8} md={7}>
                                            <Grid item xl={12}>
                                                <label className={classes.especial}>Especialidad</label>
                                                <input className={classes.usu} {...register('speciality')} />
                                            </Grid>
                                            <Grid item xl={12}>
                                                <label className={classes.especial}>¿Donde trabaja?</label>
                                                <input className={classes.usu} {...register('work_location')} />
                                            </Grid>
                                            <Grid item xl={12}>
                                                <label className={classes.especial}>Correo electronico</label>
                                                <input className={classes.usu} {...register('email')} />
                                            </Grid>
                                            <Grid item xl={12}>
                                                <label className={classes.especial}>Contraseña</label>
                                                <input className={classes.usu} {...register('password')} type="password" />
                                            </Grid>
                                            <Grid item xl={12}>
                                                <label className={classes.especial}>Confirmar Contraseña</label>
                                                <input className={classes.usu} {...register('repassword')} type="password" />
                                            </Grid>

                                            <Grid item xl={12} className={classes.center}>
                                                <Button className={classes.usu1} onClick={handleSubmit(registerUsers)}>REGISTRARME</Button>
                                            </Grid>
                                            <Grid item xl={12} className={classes.center}>
                                                    <Button className={classes.usu1} onClick={() => history.push('/iniciar-sesion')}>INICIAR SESIÓN</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    }

                    {/* Modal Register */}
                    <Modal
                        aria-labelledby="spring-modal-title"
                        aria-describedby="spring-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <Link to="/iniciar-sesion">
                                    <img src="/images/moda.png" alt="modal"  className={classes.banne}/>
                                </Link>
                            </div>
                        </Fade>
                    </Modal>

                </Grid>
            </Grid>
        </React.Fragment >
    )
}


export default Registro;