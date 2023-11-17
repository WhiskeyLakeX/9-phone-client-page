import React from 'react';
import LayoutWrapper from "@/components/Layout";
import type {NextPageWithLayout} from "@/pages/_app"

const HomePage: NextPageWithLayout = () => {
    return (
        <>
        </>
    );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <LayoutWrapper>
            {page}
        </LayoutWrapper>
    )
}
