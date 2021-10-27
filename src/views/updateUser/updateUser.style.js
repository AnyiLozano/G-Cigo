import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    container: {
        backgroundImage: 'url(/images/fondoEdit.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    },
    bola: {
        width: '30%',
        padding: '30px 0',
        '@media (max-width: 1024px)': {
            padding: '10% 0',
            width: '50%'
        }
    },
    justifyCenter: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#723D7D',
        color: '#fff',
        padding: '3% 10%',
        borderRadius: 10,
        '&:hover': {
            backgroundColor: '#723D7D',
        },
        '@media (min-width: 1025px)': {
            padding: '10px 30px',
        }
    },
    input: {
        width: '50%',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontWeight: 700,
        backgroundColor: '#EBB8F8',
        border: 'none',
        height: 40,
        color: "#723D7D",
        borderRadius: 10,
        margin: '20px 0',
        fontSize: 18,
        '@media (max-width: 1024px)': {
            width: '90%',
        }
    },
    photo: {
        padding: '50px 0'
    },
    alignCenter: {
        display: 'flex',
        alignItems: 'center'
    }
});

export default useStyle;