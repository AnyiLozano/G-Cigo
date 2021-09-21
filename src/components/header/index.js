import React from 'react';
import {
    AppBar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import useHeader from "./hook";
import _ from "lodash";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        '@media (min-width: 1025px)': {
            display: 'none'
        }
    },
    appBar: {
        backgroundColor: '#FFFFF3',
        position: 'relative'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        '@media (max-width: 1024px)': {
            display: 'none'
        }
    },
    toolbar_logo: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media (min-width: 1025px)': {
            justifyContent: 'center'
        }
    },
    logo: {
        padding: '20px 0',
        width: '15%',
        '@media (max-width: 1024px)': {
            justifyContent: 'center',
            width: '140px'
        }
    },
    div: {
        width: '7vw',
        '@media (min-width: 1025px)': {
            display: 'none'
        }
    },
    link: {
        textDecoration: 'none',
        padding: '10px 3vw',
    },
    title: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 25,
        color: '#723D7D',
        fontWeight: 600,
        '@media (min-width: 1025px) and (max-width: 1435px )': {
            fontSize: 16,
        }
    },
    hamburguer: {
        fontSize: 35
    },
    drawer: {
        width: '50vw',
        backgroundColor: '#FFFFF3',
        height: '100vh'
    },
    linkDrawer: {
        fontSize: '4vw',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
        color: "#bc65ce"

    }
}));

const Header = () => {
    const classes = useStyles();

    const {
        links,
        closeDrawer,
        anchor,
        openDrawer,
        handlerCloseSesion,
        accessToken
    } = useHeader();

    return (
        <AppBar className={classes.appBar}>

            <Toolbar className={classes.toolbar_logo}>
                {
                    accessToken !== undefined && (
                        <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu" onClick={() => openDrawer(true)}>
                            <MenuIcon className={classes.hamburguer} />
                        </IconButton>
                    )
                }

                <img src="/images/logo.png" className={classes.logo} alt="logo-g-cigo" />
                <div className={classes.div}></div>
            </Toolbar>
            {
                accessToken !== undefined && (
                    <Toolbar className={classes.toolbar}>
                        {
                            _.map(links, (item, index) => (
                                <React.Fragment key={index}>
                                    {
                                        (
                                            <React.Fragment>
                                                {
                                                    item && item.name !== undefined && (
                                                        <Link to={item && item.path} className={classes.link} >
                                                            <span className={classes.title}>{item && item.name}</span>
                                                        </Link>
                                                    )
                                                }

                                            </React.Fragment>
                                        )
                                    }
                                </React.Fragment>
                            ))
                        }
                        <span className={classes.title} onClick={() => handlerCloseSesion()}>Cerrar Sesión</span>
                    </Toolbar>
                )
            }
            <Drawer anchor="left" open={anchor} onClose={() => closeDrawer(false)}>
                <List className={classes.drawer}>
                    {
                        _.map(links, (item, index) => (
                            <React.Fragment key={index}>
                                <ListItem button >
                                    {
                                        (
                                            <React.Fragment>
                                                {
                                                    item && item.name !== undefined && (
                                                        <Link to={item && item.path} className={classes.link}>
                                                            <ListItemText>
                                                                <span className={classes.linkDrawer}>{item && item.name !== null ? item.name : 'no es'}</span>
                                                            </ListItemText>
                                                        </Link>
                                                    )
                                                }
                                            </React.Fragment>
                                        )
                                    }

                                </ListItem>

                            </React.Fragment>
                        ))
                    }
                    <ListItem>
                        <ListItemText>
                            <span className={classes.linkDrawer} onClick={() => handlerCloseSesion()}>Cerrar Sesión</span>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar >
    )
}

export default Header;

