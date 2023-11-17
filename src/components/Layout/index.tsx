import React from 'react';
import Index from "@/component/Layout/TopNavigationBar";
import Footer from "@/components/Layout/Footer";

const LayoutWrapper = ({children}: {children: React.ReactElement}) => {
    return (
        <>
         <Index/>
            <main>{children}</main>
            <Footer/>
        </>
    );
};

export default LayoutWrapper;
