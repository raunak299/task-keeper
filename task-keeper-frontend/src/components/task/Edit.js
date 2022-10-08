import './Edit.css'
// import DataContext from '../store/data-context';
import { useContext, useEffect, useState } from 'react';
import EditContext from '../store/edit-Context';

function Edit(props) {

    const editContxt = useContext(EditContext);

    const onEditHandler = () => {
        editContxt.editState(props.id);
    }


    return (
        <div id='icons' onClick={onEditHandler}>
            <img className={`edit-icon ${props.id === editContxt.editItem.id ? 'clicked' : ''}`} src='https://cdn-icons-png.flaticon.com/128/1828/1828911.png' alt='edit' />
        </div>
    );
}

export default Edit;