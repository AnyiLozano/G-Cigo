import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    footer_logo: {
        width: '50%',

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
                <Grid item lg={5} md={5} sm={5} xs={5} className={classes.center}>
                    <img src="/images/astra.png" alt='footer' className={classes.footer_logo}/>
                </Grid>
                <Grid item lg={7} md={7} sm={7} xs={7} className={classes.programa}>
                    <img src="/images/text.png" alt='footer' className={classes.programa}/>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;