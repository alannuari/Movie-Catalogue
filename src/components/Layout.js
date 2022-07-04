import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, pathname }) => {
    return (
        <>
            <Header pathname={pathname} />
            {children}
            <Footer />
        </>
    );
}
 
export default Layout;