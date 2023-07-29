import React from 'react';
import "./Comments.css";
import ErrorBox from '../ErrorBox/ErrorBox';
import DeleteModal from '../DeleteModal/DeleteModal';

const Comments = () => {
    return (
        <>
            <ErrorBox msg="هیچ کامنتی یافت نشد" />
            <DeleteModal />
        </>
        
    );
};

export default Comments;