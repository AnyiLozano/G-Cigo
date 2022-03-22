import React from "react";
import useHome from "./hook";
import useComponents from "../../components";
import _ from "lodash";
import {Container, makeStyles} from "@material-ui/core";
import { useHistory } from "react-router";

const useStyle = makeStyles({
    image: {
        width: '100%',
        height: '50vw',
        '@media (max-width: 1024px)': {
            height: 'auto'
        }
    },
    mision: {
        width: '100%',
        padding: '80px 0px 80px 20px',
        '@media (max-width: 414px)': {
            padding: '20px 0px 20px 5px',
        }
    }
})

const Home = () => {
    const {
        carousel,
        accessToken
    } = useHome();

    const {
        Carousel
    } = useComponents();

    const classes = useStyle();

    const history = useHistory();

    if(accessToken === undefined){
        history.push('/iniciar-sesion')
    }

    return (
        <React.Fragment>
            <Carousel
                dots={true}
                arrows={false}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
            >
                {
                    _.map(carousel, (item, index) => (
                        <img src={item.image} key={index} alt="carousel-g-cigo" className={classes.image} />
                    ))
                }
            </Carousel>
            <Container maxWidth="lg">
                <img src="/images/misiion.png" alt="mision-g-cigo" className={classes.mision} />
            </Container>
        </React.Fragment>
    )
}

export default Home;