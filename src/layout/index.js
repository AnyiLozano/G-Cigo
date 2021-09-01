import React from 'react';
import useComponents from "../components";
import {makeStyles} from "@material-ui/core";

const MainLayout = props => {
    const {children} = props;
    const {
        Header,
        Footer
    } = useComponents();

    const useStyle = makeStyles({
        main: {
            marginTop: '10vw',
            '@media (max-width: 1024px)': {
                marginTop: '6vh'
            },
            '@media (max-width: 768px)': {
                marginTop: '8vh'
            },
            '@media (max-width: 600px)': {
                marginTop: '9vh'
            },
            '@media (max-width: 540px)': {
                marginTop: '12vh'
            },
            '@media (max-width: 414px)': {
                marginTop: '10vh'
            },
            '@media (max-width: 360px)': {
                marginTop: '13vh'
            },
            '@media (max-width: 320px)': {
                marginTop: '14vh'
            }
        }
    });

    const classes = useStyle();

    return (
        <React.Fragment>
            <Header />
                <div className={classes.main}>
                    {children}
                </div>
            <Footer />
        </React.Fragment>
    )
}
export default MainLayout;