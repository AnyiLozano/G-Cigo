import { makeStyles } from "@material-ui/core";

const body = document.body.clientWidth;

const useStyle = makeStyles({
    image2: {
        width: '100%',
        height: '100%',
        '@media (max-width: 1024px)': {
            height: 'auto',
            padding: '50px 0' 
        }
    },
    svg: {
        width: '46%',
        '@media (min-width: 1800px)': {
            width: '49%'
        },
        '@media (max-width: 1024px)': {
            width: '55%'
        }
    },
    background: {
        backgroundImage: "url(/images/perf.png)",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: '50vw',
        '@media (max-width: 1024px)': {
            height: '100%'
        }
    },
    containerSvg: {
        paddingTop: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text1: {
        fill: '#fff',
        fontWeight: 600,
        fontFamily: 'Montserrat',
        fontSize: body * 0.017,
        '@media (max-width: 414px)': {
            fontSize: '8vw',       
        }
    },
    button: {
        backgroundColor: '#723D7D',
        color: '#fff',
        padding: '7px 20px',
        borderRadius: 10
    },
    div: {
        '@media (max-width: 1024px)': {
            height: '35vw'
        }
    }
    // bola: {
    //     '@media (max-width: 360px)': {
    //         width: '50%',
            
    //     }
    // },
    // rosado: {
    //     background: 'linear-gradient(to bottom, transparent, #3f51b5)',
    //     height: 288,
    //     width: 644,
    //     borderTopLeftRadius: 200,
    //     borderBottomLeftRadius: 200
    // },
    // justifyEnd: {
    //     display: 'flex',
    //     justifyContent: 'flex-end'
    // },
    // bola1: {
    //     backgroundImage: 'url(/images/rosado.png)',
    //     backgroundSize: '100% 100%',
    //     height: '13vw',
    //     width: '30vw',
    //     padding: '20px',
    //     position: "absolute",
    //     right: '0%',
    //     top: '37vw',
    //     '@media (max-width: 600px)': {
    //         top: '62vw',
    //         right: '0%',
    //         width: '40vw',
    //         height: '18vw',
    //         padding: '20px',
    //         position: 'absolute',
    //         backgroundSize: '100% 100%',
    //         backgroundImage: 'url(/images/rosado.png)',
    //     }
    // },
    // boton: {
    //     backgroundColor: '#723D7D',
    //     color: '#fff',
    //     fontSize: '30px',
    //     borderRadius: '20px',
    //     padding: '7px 30px',
    //     '&:hover': {
    //         backgroundColor: '#723d7dd6'
    //     }
    // },
    // buton: {
    //     justifyContent: 'center',
    //     display: 'flex',
    //     padding: '50px 0'
    // },
    // background: {
    //     backgroundImage: "url(/images/perf.png)",
    //     backgroundSize: '100% 100%',
    //     backgroundRepeat: 'no-repeat',
    //     height: '100%',
    //     '@media (max-width: 414px)': {
    //         height: '100%'
    //     }
    // },
    // profileImage: {
    //     width: '50%',
    //     '@media (max-width: 411px)': {
    //         marginRight: '10%',
    //         width: '40%'
    //     },
    //     '@media (max-width: 375px)': {
    //         marginRight: '10%',
    //         width: '50%'
    //     },
    //     '@media (max-width: 360px)': {
    //         marginRight: '10%',
    //         width: '50%',
    //     }
    // },
    // containerProfile: {
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     '@media (max-width: 414px)': {
    //         padding: '70px 0px',
            
    //     }
    // },
    // textContainer: {
    //     color: '#fff',
    //     fontFamily: 'Coves Light',
    //     fontWeight: 700,
    //     '@media (max-width: 411px)': {
    //         position: 'absolute',
    //         width: '70%',
    //         top: '44vh',
    //         right: '0%',
    //         paddingLeft: '10%'
    //     },
    //     '@media (max-width: 375px)': {
    //         position: 'absolute',
    //         width: '70%',
    //         top: '43vh',
    //         right: '0%',
    //         paddingLeft: '10%'
    //     },
    //     '@media (max-width: 360px)': {
    //         position: 'absolute',
    //         width: '70%',
    //         top: '53vh',
    //         right: '0%',
    //         paddingLeft: '10%'
    //     }
    // },
    // pinkSection: {
    //     '@media (max-width: 411px)': {
    //         position: 'absolute',
    //         width: '70%',
    //         top: '42vh',
    //         right: '0%',
    //     },
    //     '@media (max-width: 375px)': {
    //         position: 'absolute',
    //         width: '70%',
    //         top: '42vh',
    //         right: '0%',
    //     },
    //     '@media (max-width: 360px)': {
    //         position: 'absolute',
    //         width: '70%',
    //         top: '53vh',
    //         right: '0%',
    //     }
    // }
});

export default useStyle;