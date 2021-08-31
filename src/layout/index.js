import React from 'react';
import useComponents from "../components";

const MainLayout = props => {
    const {children} = props;
    const {
        Header
    } = useComponents();

    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}
export default MainLayout;