/** eslint-disable */
import React, { useCallback, useState } from 'react';
import { Container, Grid, makeStyles } from "@material-ui/core";
import useVideos from "./hook";
import _ from "lodash";
import { useHistory } from 'react-router';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import "../../styles/svg.scss";

const useStyle = makeStyles({
    image1: {
        width: '100%',
        height: '42vw',
        '@media (max-width: 1024px)': {
            height: 'auto'
        }
    },
    container: {
        padding: '0% 4%',
        paddingBottom: '5%'
    },
    video: {
        padding: '5% 0%',
        width: '100%'
    },
    containervideo: {
        padding: '2%'
    },
    videoeo: {
        width: '50vw',
        backgroundColor: "transparent",
        '@media (max-width: 1024px)': {
            width: '80vw'
        }
    },
    titleVideo: {
        fontFamily: "Montserrat",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "#723D7D"
    },
    description: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        fontSize: 20,
        color: "#1BCDEA",
        textAlign: "center"
    }
})

const Videos = () => {
    const classes = useStyle();

    const { videosFinal, accessToken, handleChange, totalPag, page } = useVideos();

    const history = useHistory();

    if (accessToken === undefined) {
        history.push('/iniciar-sesion')
    }

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);


    const handleOpen = (id) => {
        setOpen(true);
        setValue(id)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <img src="/images/banner1.png" alt="banner1" className={classes.image1} />
            <Container maxWidth="xl" className={classes.container}>
                <Grid container>
                    {
                        _.map(videosFinal, (item, index) => (
                            <Grid item lg={4} md={4} sm={12} key={index} className={classes.containervideo} l>
                                <img src={item.image} alt="videos" className={classes.video} onClick={() => handleOpen(item.video_url)} />
                                <h4 className={classes.titleVideo}>{item.title}</h4>
                                <p className={classes.description}>{item.description}</p>
                            </Grid>
                        ))
                    }

                </Grid>
                <Modal open={open} style={{ backgroundColor: "#00000026" }}>

                    <Grid container>
                        <Grid item lg={12} xs={12} style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                            <img src="/images/error.png" alt="Delete" onClick={handleClose} />
                        </Grid>
                        <Grid item lg={12} xs={12}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
                        >
                            <video src={value} className={classes.videoeo} controls width="50%"></video>
                        </Grid>

                    </Grid>
                </Modal>
                <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack spacing={2}>
                        <Pagination count={totalPag} color="secondary" page={page} onChange={handleChange} />
                    </Stack>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Videos;