import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageHeader = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default PageHeader;