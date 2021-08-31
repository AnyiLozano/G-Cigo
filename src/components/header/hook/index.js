import {useState} from "react";

const useHeader = () => {
    const links = [
        {
            name: 'Inicio',
            path: '/'
        },
        {
            name: 'Videos',
            path: '/'
        },
        {
            name: 'Noticias',
            path: '/'
        },
        {
            name: 'Eventos',
            path: '/'
        }
    ];

    const [anchor, setAnchor] = useState(false);

    const closeDrawer = (close) => {
        setAnchor(close)
    }

    const openDrawer = (open) => {
        setAnchor(open)
    }

    return {
        links,
        anchor,
        closeDrawer,
        openDrawer
    }
}
export default useHeader;