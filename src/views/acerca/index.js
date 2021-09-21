import { Container, Grid, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { useHistory } from 'react-router';
import useAcerca from "./hook";


const useStyle = makeStyles({
    image3: {
        width: '100%',
        height: '45vw',
        '@media (max-width: 1024px)': {
            height: 'auto'
        }
    },
    textpo: {
        display: 'flex',
        justifyContent: 'center',
        padding: '30px 0',
    },
    texty: {
        width: '50vw'

    },
    vide: {
        width: '80%'
    },
    vide1: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
        marginBottom: '40px'
    }
})


const Acerca = () => {
    const classes = useStyle();

    const { acerca, videos, accessToken } = useAcerca();

    const history = useHistory();

    if(accessToken === undefined){
        history.push('/iniciar-sesion')
    }

    return (
        <React.Fragment>
            <Grid item lg={12} className={classes.justifyCenter}>
                <img src="/images/banner3.png" alt="banner3" className={classes.image3} />
            </Grid>
            <Container maxWidth="xl" className={classes.baja}>
                <Grid container>
                    {
                        _.map(acerca, (item, index) => (
                            <React.Fragment>
                                <Grid item lg={12} xs={12} md={12} sm={12} className={classes.textpo}>
                                    <img src={item.event} alt="event" className={classes.texty} />
                                </Grid>
                            </React.Fragment>
                        ))
                    }
                </Grid>
                <Container maxWidth="xl">
                    <Grid container>
                        {
                            _.map(videos, (item, index) => (
                                <Grid item lg={4} xs={12} md={4} sm={12} className={classes.vide1}>
                                    <img src={item.event1} alt="event" className={classes.vide}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Acerca;