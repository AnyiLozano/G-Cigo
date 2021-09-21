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
        height: '50vw',
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
    }
})

const Videos = () => {
    const classes = useStyle();

    const { videos, accessToken } = useVideos();

    const history = useHistory();
    console.log(videos)

    if (accessToken === undefined) {
        history.push('/iniciar-sesion')
    }

    const [videosFinal, setVideosFinal] = useState([]);
    const [page, setPage] = React.useState(1);
    const [totalPag, setTotalPag] = React.useState(Math.ceil(videos.length / 6));
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);


    const handleOpen = (id) => {
        setOpen(true);
        setValue(id)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const perPage = () => {
        let totalItems = videos.length
        let currentPage = page;
        let pageSize = 6;
        let startPage, endPage;

        let totalPages = Math.ceil(videos.length / 6);
        setTotalPag(totalPages);
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {

            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        let pageOfItems = videos.slice(startIndex, endIndex + 1);

        setVideosFinal(pageOfItems)
    }

    useCallback(
        () => {
            perPage();
        },
        [perPage]
    )

    const handleChange = (e, value) => {
        setPage(value);
        perPage();
    }



    return (
        <React.Fragment>
            <img src="/images/banner1.png" alt="banner1" className={classes.image1} />
            <Container maxWidth="xl" className={classes.container}>
                <Grid container>
                    {
                        _.map(videosFinal, (item, index) => (
                            <Grid item lg={4} md={4} sm={12} key={index} className={classes.containervideo} l>
                                <img src={item.image} alt="videos" className={classes.video} onClick={() => handleOpen(item.video_url)} />

                            </Grid>
                        ))
                    }
                    <Grid item lg={12} tyle={{ display: 'flex', justifyContent: 'center' }}>
                        <Stack spacing={2}>
                            <Pagination count={totalPag} color="secondary" page={page} onChange={handleChange} />
                        </Stack>
                    </Grid>
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
            </Container>
        </React.Fragment>
    )
}

export default Videos;