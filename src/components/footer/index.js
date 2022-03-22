import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    footer_logo: {
        width: '50%',
        '@media (max-width: 1024px)': {
            padding: '20px 0'
        }

    },
    footer: {
        backgroundColor: '#FFFFF3',
        padding: '50px 30px',
        boxShadow: 'inset 0px 2px 4px -1px rgb(0 0 0 / 20%), inset 0px 4px 5px 0px rgb(0 0 0 / 14%), inset 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        '@media (max-width: 1024px)': {
            padding: '20px'
        }
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    programa: {
        paddingRight: '40px',
        width: '100%',

    }
})


const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Grid container>
                <Grid item lg={5} md={12} sm={12} xs={12} className={classes.center}>
                    <img src="/images/astra.png" alt='footer' className={classes.footer_logo}/>
                </Grid>
                <Grid item lg={7} md={12} sm={12} xs={12} className={classes.programa}>
                    <img src="/images/text.png" alt='footer' className={classes.programa}/>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;