import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    image1: {
        backgroundImage: 'url(/images/sesion.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        '@media (max-width: 1024px)': {
            height: 'auto'
        }
    },
    image2: {
        width: '50.8vw',
        height: '45.6vw',
        paddingBottom: '2vw',
        '@media (max-width: 1024px)': {
            width: '80%',
            height: 'auto'
        }
    },
    image3: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    usu: {
        backgroundColor: '#EBB8F8',
        opacity: '.6',
        borderRadius: '20px',
        border: 'none',
        width: '26.5vw',
        padding: '15px 0 15px 20px',
        color: '#000',
        margin: '0.5vw 0',
        '&::placeholder': {
            color: '#fff',
            fontSize: 18,
        },
        '&:focus-visible': {
            outline: 'none'
        },
        '@media (max-width: 1024px)': {
            width: '93%',
            margin: '2vw 0'
        },
        '@media (min-width: 2000px)': {
            width: 622
        }
    },
    usu1: {
        backgroundColor: '#723D7D',
        borderRadius: '20px',
        border: 'none',
        width: '80%',
        padding: '10px 0',
        margin: '20px 0',
        fontSize: '20px',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#723D7D'
        },
        '@media (max-width: 1024px)': {
            width: '90%',
        },
        '@media (min-width: 1280px)': {
            //marginLeft: '2vw',
            width: '25vw',
        },
        '@media (min-width: 1640px)': {
            //marginLeft: '3.7vw',
            width: 600,
        }
    },
    usu3: {
        color: '#723D7D',
        fontFamily: 'Montserrat Medium',
        fontWeight: '700',
        fontSize: 20,
        '@media (min-width: 1280px)': {
            //marginLeft: '2vw',
            fontSize: '1.61vw'

        },
        '@media (min-width: 1920px)': {
            marginLeft: '0vw',
            width: 600,
            fontSize: 22,
            textAlign: 'center'
        }
    },
    alignCenter: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '-3%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '@media (max-width: 1024px)': {
            marginLeft: '0%',
            display: 'block'
        }
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: 622,
        '@media (min-width: 1280px) and (max-width: 1919px)': {
            width: '27.5vw'
        }
    },
    especial: {
        fontFamily: 'Montserrat',
        color: '#381E3D',
        fontWeight: '600'
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #e6b9f099,#754080 )'

    },
    banne: {
        '@media (max-width: 600px)': {
            width: '90vw'
        },
        '@media (max-width: 768px)': {
            width: '90vw'
        },
        '@media (max-width: 1024px)': {
            width: '90vw'
        }
    }
});

export default useStyle;