import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children, pathname }) => {
    return (
        <>
            <ScrollToTop />
            <Header pathname={pathname} />
            {children}
            <Footer />
        </>
    );
}
 
export default Layout;