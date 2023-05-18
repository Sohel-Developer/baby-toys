import React from 'react';
import useDocumentTitle from '../../useDocumentTitle/useDocumentTitle';

const AllToys = () => {
    useDocumentTitle('Baby-Toy | AllToys')
    return (
        <div>
            <h2 className="text-4xl">All Toyss</h2>
        </div>
    );
};

export default AllToys;