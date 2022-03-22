import { Button, Grid } from "@material-ui/core";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import useUpdateUser from "./hook";
import useStyle from "./updateUser.style";

const UpdateUser = () => {
    const { user, register, handleEditUser, handleSubmit, handleClick, handleFile, accessToken } = useUpdateUser();

    const classes = useStyle();

    const file = useRef()

    const history = useHistory();

    if (accessToken === undefined) {
        history.push('/iniciar-sesion')
    }

    return (
        <React.Fragment>
            <Grid container className={classes.container}>
                <Grid item lg={6} xs={12} className={classes.photo}>
                    {
                        user.avatar ? (

                            <React.Fragment>
                                <Grid item xs={12} className={classes.justifyCenter}>
                                    <img src={`http://www.api.grupocigo.com/${user.avatar}`} alt="Profile's Photos" width="50%" style={{ paddingBottom: 20 }} />
                                    <input {...register('images')} type="file" style={{ display: 'none' }} ref={file} onChange={(e) => handleFile(e.target.files)} />
                                </Grid>
                                <Grid item xs={12} className={classes.justifyCenter}>
                                    <Button className={classes.button} onClick={() => handleClick(file)}>Cambiar Foto de perfil</Button>
                                </Grid>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Grid item xs={12} className={classes.justifyCenter}>
                                    <img src="/images/bola.png" alt="Profile's Photos" className={classes.bola} />
                                    <input {...register('images')} type="file" style={{ display: 'none' }} ref={file} onChange={(e) => handleFile(e.target.files)} />
                                </Grid>
                                <Grid item xs={12} className={classes.justifyCenter}>
                                    <Button className={classes.button} onClick={() => handleClick(file)}>Cambiar Foto de perfil</Button>
                                </Grid>

                            </React.Fragment>
                        )
                    }
                </Grid>
                <Grid item lg={6} xs={12} className={classes.alignCenter}>
                    <div style={{ width: '100%' }}>
                        <Grid item xs={12} lg={12} className={classes.justifyCenter}>
                            <input {...register('names')} type="text" className={classes.input} placeholder="Nombre Completo" />
                        </Grid>
                        <Grid item xs={12} className={classes.justifyCenter}>
                                <input {...register('speciality')} type="text" className={classes.input} placeholder="Especialidad"/>
                        </Grid>
                        <Grid item xs={12} className={classes.justifyCenter}>
                            <Button className={classes.button} style={{ marginBottom: 30 }} onClick={handleSubmit(handleEditUser)}>Actualizar</Button>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default UpdateUser;