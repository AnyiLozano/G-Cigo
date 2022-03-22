import React from 'react';
import {Container, Grid, makeStyles} from "@material-ui/core";
import useNoticias from "./hook";
import _ from "lodash";
import { useHistory } from 'react-router';

const useStyle = makeStyles({
    image2: {
        width: '100%',
        height: '50vw',
        '@media (max-width: 1024px)': {
            height: 'auto'
        }
    },
    noti1: {
        width: '50%',
        paddingBottom: '5%'
    },
    ismal: {
        justifyContent: 'center',
        display: 'flex'
    },
    baja: {
        padding: '4% 0%',
        paddingBottom: '5%'
    },
    texty: {
        width: '90%'
    },
    textpo: {
        '@media (max-width: 1024px)': {
            justifyContent: 'center',
            display: 'flex'
        }
    }
})

const Noticias = () => {
    const classes = useStyle();

    const { noticias, accessToken } = useNoticias();

    const history = useHistory();

    if(accessToken === undefined){
        history.push('/iniciar-sesion')
    }

    return(
       <React.Fragment>
           <img src="/images/banner2.png" alt="banner2" className={classes.image2}/>
           <Container maxWidth="xl" className={classes.baja}>
               <Grid container>
                   {
                       _.map(noticias, (item, index) => (
                           <React.Fragment>
                               <Grid item lg={5} xs={12} md={5}  className={classes.ismal}>
                                   <img src={item.noticias} alt="noticias1" className={classes.noti1} />
                               </Grid>
                               <Grid item lg={7} xs={12} md={7} className={classes.textpo}>
                                   <img src={item.text1} alt="noticias1" className={classes.texty} />
                               </Grid>
                           </React.Fragment>
                       ))
                   }
               </Grid>
           </Container>
       </React.Fragment>
    )
}

export default  Noticias;