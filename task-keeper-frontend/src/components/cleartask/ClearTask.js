
import { useContext, useEffect } from 'react';
import DataContext from '../store/data-context';
import styles from './ClearTask.module.css'


function ClearTask(props) {

    const dataContx = useContext(DataContext);

    const clearItemsHandler = () => {
        dataContx.onClearItems();
    }


    const taskList = dataContx.tList;
    const length = taskList.length;

    return (
        <div className={length !== 0 ? styles['clear-tasks'] : styles['clear-tasks-hide']}
            onClick={clearItemsHandler} >
            {props.children}
        </div >
    );
}

export default ClearTask;