import React from 'react';
import {Container, Grid, makeStyles} from "@material-ui/core";
import _ from "lodash";
import useEventos from "./hook";
import {Link, useHistory} from "react-router-dom";

const useStyle = makeStyles({
    image3: {
        width: '100%',
        height: '45vw',
        '@media (max-width: 1024px)': {
            height: 'auto'
        }
    },
    event: {
        width: '60%',
        paddingBottom: '5%'
    },
    image5: {
        justifyContent: 'center',
        display: 'flex',
        padding: '2% 0%',
    },
    baja: {
        padding: '4% 10%',
        paddingBottom: '5%'
    },
    texty: {
        width: '70%'
    },
    textpo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        '@media (max-width: 1024px)': {
            justifyContent: 'center',
            display: 'flex',
            padding: '5% 0%',
        }
    }
})

const Eventos = () => {
    const classes = useStyle();

    const { eventos, accessToken } = useEventos();

    const history = useHistory();

    if(accessToken === undefined){
        history.push('/iniciar-sesion')
    }

    return (
        <React.Fragment>
            <img src="/images/banner3.png" alt="banner3" className={classes.image3} />
            <Container maxWidth="xl" className={classes.baja}>
                <Grid container>
                    {
                        _.map(eventos, (item, index) => (
                            <React.Fragment>
                                <Grid item lg={6} md={6} sm={6} className={classes.image5}>
                                    <img src={item.event}  alt="banner3" className={classes.event}/>
                                </Grid>
                                <Grid item lg={6} xs={12} md={6} sm={6} className={classes.textpo}>
                                    <Link to="/acerca" className={classes.textpo}>
                                        <img src={item.text3} alt="even1" className={classes.texty} />
                                    </Link>
                                </Grid>
                            </React.Fragment>
                        ))
                    }
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Eventos;