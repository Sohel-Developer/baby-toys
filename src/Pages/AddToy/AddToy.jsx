import React, { useEffect, useRef } from 'react';
import useDocumentTitle from '../../useDocumentTitle/useDocumentTitle';

const AddToy = () => {
    /* Upadte Title */
    useDocumentTitle('Baby-Toy | AddToy')
    return (
        <div>
            <h2 className="text-3xl">Add Ay Toy</h2>
        </div>
    );
};

export default AddToy;